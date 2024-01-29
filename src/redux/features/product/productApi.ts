import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getAllProducts: builder.query({
         query: (query) => ({
            url: "/products",
            method: "GET",
            params: query,
         }),
      }),
      getSingleProduct: builder.query({
         query: (id: string) => ({
            url: `/products/${id}`,
            method: "GET",
         }),
      }),
      createProduct: builder.mutation({
         query: (productInfo) => ({
            url: "/products",
            method: "POST",
            body: productInfo,
         }),
         invalidatesTags: ["product"],
      }),
      updateProduct: builder.mutation({
         query: ({ id, productInfo }) => ({
            url: `/products/${id}`,
            method: "PUT",
            body: productInfo,
         }),
         invalidatesTags: ["product"],
      }),
      deleteProduct: builder.mutation({
         query: (id: string) => ({
            url: `/products/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: ["product"],
      }),
   }),
});

export const {
   useGetAllProductsQuery,
   useGetSingleProductQuery,
   useCreateProductMutation,
   useUpdateProductMutation,
   useDeleteProductMutation,
} = productApi;
