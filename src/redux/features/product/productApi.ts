import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getAllProducts: builder.query({
         query: () => ({
            url: "/products",
            method: "GET",
         }),
      }),
      getSingleProduct: builder.query({
         query: (id: string) => ({
            url: `/products/${id}`,
            method: "GET",
         }),
      }),
      deleteProduct: builder.query({
         query: (id: string) => ({
            url: `/products/${id}`,
            method: "DELETE",
         }),
      }),
   }),
});

export const {
   useGetAllProductsQuery,
   useGetSingleProductQuery,
   useDeleteProductQuery,
} = productApi;
