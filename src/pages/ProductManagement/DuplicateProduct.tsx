import { toast } from "sonner";
import ProductForm from "../../components/form/ProductForm";
import {
   useCreateProductMutation,
   useGetSingleProductQuery,
} from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const DuplicateProduct = () => {
   const params = useParams();
   const { data: productData, isSuccess: productGetIsSuccess } =
      useGetSingleProductQuery(params.id);

   const [createProduct, { isLoading, isSuccess, isError, data, error }] =
      useCreateProductMutation();

   let toastId;
   if (isSuccess) {
      toastId = toast.success(data?.message);
   }
   if (isError) {
      if (error && error.data && error.data.message) {
         toast.error(error.data.message, { id: toastId });
      } else {
         toast.error("Failed to update product, server error, try again", {
            id: toastId,
         });
      }
   }

   const handleSubmit = (formData: unknown) => {
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
         {!productGetIsSuccess ? (
            <Loading />
         ) : (
            <div className="mt-10">
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
