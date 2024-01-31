import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      registerUser: builder.mutation({
         query: (userInfo) => ({
            url: "/auth/register",
            method: "POST",
            body: userInfo,
         }),
      }),
      loginUser: builder.mutation({
         query: (userInfo) => ({
            url: "/auth/login",
            method: "POST",
            body: userInfo,
         }),
         invalidatesTags: ["user"],
      }),
      getMe: builder.query({
         query: () => ({
            url: "/auth/me",
            method: "GET",
         }),
         providesTags: ["user"],
      }),
   }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useGetMeQuery } =
   userApi;
