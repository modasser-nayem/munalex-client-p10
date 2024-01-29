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

const baseQuery = fetchBaseQuery({
   baseUrl: "http://localhost:5000/api/v1",
   prepareHeaders: (headers, api) => {
      const token = (api.getState() as RootState).auth.token;
      if (token) {
         headers.set("authorization", token);
      }
      return headers;
   },
});

const baseQueryTokenChecking: BaseQueryFn<
   FetchArgs,
   BaseQueryApi,
   DefinitionType
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = async (args, api, extraOptions): Promise<any> => {
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
   tagTypes: ["product", "sale"],
   endpoints: () => ({}),
});
