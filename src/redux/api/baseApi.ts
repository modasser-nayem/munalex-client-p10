import {
   BaseQueryApi,
   BaseQueryFn,
   DefinitionType,
   FetchArgs,
   createApi,
   fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { jwtDecode } from "jwt-decode";
import { logOutUser } from "../features/auth/authSlice";

// const serverUrl = import.meta.env.VITE_SERVER_URL;
const serverUrl = "https://munalex-server.vercel.app/api/v1";
const baseQuery = fetchBaseQuery({
   baseUrl: serverUrl,
   prepareHeaders: (headers, api) => {
      const token = (api.getState() as RootState).auth.token;
      if (token) {
         headers.set("authorization", token);
      }
      return headers;
   },
});

interface TReduxRtqError {
   status: number;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   data: any;
}

const baseQueryTokenChecking: BaseQueryFn<
   FetchArgs,
   BaseQueryApi,
   DefinitionType
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = async (args, api, extraOptions): Promise<any> => {
   // try {
   let result = await baseQuery(args, api, extraOptions);

   const currentToken = (api.getState() as RootState).auth.token;

   if (currentToken) {
      const decodeToken = jwtDecode(currentToken);

      const currentDate: number = Math.floor(Date.now() / 1000);
      const expireDate = decodeToken?.exp as number;

      if (expireDate < currentDate) {
         console.log(`token is expire ${expireDate}`);
         api.dispatch(logOutUser());
         result = await baseQuery(args, api, extraOptions);
      }
   }

   return result;
};

export const baseApi = createApi({
   reducerPath: "baseApi",
   baseQuery: baseQueryTokenChecking,
   tagTypes: ["user", "product", "sale"],
   endpoints: () => ({}),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isReduxRTQError = (error: any): error is TReduxRtqError => {
   return (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      "data" in error
   );
};
