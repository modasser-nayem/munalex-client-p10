import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getAllProducts: builder.query({
         query: (query) => ({
            url: "/products",
            method: "GET",
            params: query,
         }),
         providesTags: ["product"],
      }),
      getSingleProduct: builder.query({
         query: (id: string) => ({
            url: `/products/${id}`,
            method: "GET",
         }),
         providesTags: ["product"],
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
      dynamicFilteringData: builder.query({
         query: () => ({
            url: "/products/filtering-data",
            method: "GET",
         }),
      }),
   }),
});

export const {
   useGetAllProductsQuery,
   useGetSingleProductQuery,
   useCreateProductMutation,
   useUpdateProductMutation,
   useDeleteProductMutation,
   useDynamicFilteringDataQuery,
} = productApi;
