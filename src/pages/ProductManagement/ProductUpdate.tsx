import { toast } from "sonner";
import ProductForm from "../../components/form/ProductForm";
import {
   useGetSingleProductQuery,
   useUpdateProductMutation,
} from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { isReduxRTQError } from "../../redux/api/baseApi";

const ProductUpdate = () => {
   const params = useParams();
   const { data: productData, isSuccess: isProductDataSuccess } =
      useGetSingleProductQuery(params.id as string);

   const [updateProduct, { isLoading, data, error }] =
      useUpdateProductMutation();

   let toastId;
   if (data) {
      toastId = toast.success(data?.message);
   }
   if (error) {
      if (isReduxRTQError(error)) {
         toast.error(error?.data?.message, { id: toastId });
      } else {
         toast.error("Failed to update product, server error, try again", {
            id: toastId,
         });
      }
   }

   const handleSubmit: SubmitHandler<FieldValues> = (formData) => {
      if (formData.price) {
         formData.price = Number(formData.price);
      }
      if (formData.quantity) {
         formData.quantity = Number(formData.quantity);
      }
      updateProduct({ id: params.id, productInfo: formData });
   };

   return (
      <>
         {!productData && !isProductDataSuccess ? (
            <Loading />
         ) : (
            <div className="mt-10">
               <ProductForm
                  isLoading={isLoading}
                  title="Update Product"
                  buttonTitle="Update"
                  handleSubmit={handleSubmit}
                  defaultValues={productData.data}
               />
            </div>
         )}
      </>
   );
};

export default ProductUpdate;
