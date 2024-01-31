import { baseApi } from "../../api/baseApi";

export const salesApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      saleProduct: builder.mutation({
         query: (saleInfo) => ({
            url: `/sales/${saleInfo.productId}`,
            method: "POST",
            body: saleInfo,
         }),
         invalidatesTags: ["product", "sale"],
      }),
      getSalesHistory: builder.query({
         query: (query) => ({
            url: `/sales/history`,
            method: "GET",
            params: { category: query },
         }),
         providesTags: ["sale"],
      }),
   }),
});

export const { useSaleProductMutation, useGetSalesHistoryQuery } = salesApi;
