import { toast } from "sonner";
import ProductForm from "../../components/form/ProductForm";
import { useCreateProductMutation } from "../../redux/features/product/productApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { isReduxRTQError } from "../../redux/api/baseApi";

const CreateNewProduct = () => {
   const [createProduct, { isLoading, data, error }] =
      useCreateProductMutation();

   let toastId;
   if (data) {
      toastId = toast.success(data?.message);
   }
   if (error) {
      if (isReduxRTQError(error)) {
         toast.error(error?.data?.message, { id: toastId });
      } else {
         toast.error("Failed to create product, server error, try again", {
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
      <div className="my-10 mx-5">
         <ProductForm
            isLoading={isLoading}
            title="Create New Product"
            buttonTitle="Create"
            handleSubmit={handleSubmit}
         />
      </div>
   );
};

export default CreateNewProduct;
