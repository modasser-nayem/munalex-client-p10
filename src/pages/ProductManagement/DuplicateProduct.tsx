import { toast } from "sonner";
import ProductForm from "../../components/form/ProductForm";
import {
   useCreateProductMutation,
   useGetSingleProductQuery,
} from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { isReduxRTQError } from "../../redux/api/baseApi";

const DuplicateProduct = () => {
   const params = useParams();
   const { data: productData, isSuccess: isProductDataSuccess } =
      useGetSingleProductQuery(params.id as string);

   const [createProduct, { isLoading, data, error }] =
      useCreateProductMutation();

   let toastId;
   if (data) {
      toastId = toast.success(data?.message);
   }
   if (error) {
      if (isReduxRTQError(error)) {
         toast.error(error.data.message, { id: toastId });
      } else {
         toast.error("Failed to duplicate product, server error, try again", {
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
      createProduct(formData);
   };

   return (
      <>
         {!isProductDataSuccess ? (
            <Loading />
         ) : (
            <div className="my-10 mx-5">
               <ProductForm
                  isLoading={isLoading}
                  title="Duplicate Product"
                  buttonTitle="Duplicate"
                  handleSubmit={handleSubmit}
                  defaultValues={productData.data}
               />
            </div>
         )}
      </>
   );
};

export default DuplicateProduct;
