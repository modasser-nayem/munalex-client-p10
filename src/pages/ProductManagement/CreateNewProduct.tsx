import { toast } from "sonner";
import ProductForm from "../../components/form/ProductForm";
import { useCreateProductMutation } from "../../redux/features/product/productApi";

const CreateNewProduct = () => {
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
         toast.error("Failed to create product, server error, try again", {
            id: toastId,
         });
      }
   }

   const handleSubmit = (formData: unknown) => {
      if (formData.price) {
         formData.price = Number(formData.price);
         console.log(formData);
      }
      if (formData.quantity) {
         console.log(formData.quantity);
         formData.quantity = Number(formData.quantity);
      }
      createProduct(formData);
   };

   return (
      <div className="mt-10">
         <ProductForm
            isLoading={isLoading}
            title="Create New Product"
            handleSubmit={handleSubmit}
         />
      </div>
   );
};

export default CreateNewProduct;
