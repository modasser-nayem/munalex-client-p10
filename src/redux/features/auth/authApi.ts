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
      }),
      getMe: builder.query({
         query: () => ({
            url: "/auth/me",
            method: "GET",
         }),
      }),
   }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useGetMeQuery } =
   userApi;
