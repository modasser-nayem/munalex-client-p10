import { baseApi } from "../../api/baseApi";

export const salesApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      saleProduct: builder.mutation({
         query: (saleInfo) => ({
            url: `/sales/${saleInfo.productId}`,
            method: "POST",
            body: saleInfo,
         }),
         invalidatesTags: ["sale", "product"],
      }),
      getSalesHistory: builder.query({
         query: (query) => ({
            url: `/sales`,
            method: "GET",
            params: query,
         }),
      }),
   }),
});

export const { useSaleProductMutation, useGetSalesHistoryQuery } = salesApi;
