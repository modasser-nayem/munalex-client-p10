import ProductForm from "../../components/form/ProductForm";

const handleSubmit = (data: unknown) => {
   console.log(data);
};

const CreateNewProduct = () => {
   return (
      <div className="mt-10">
         <ProductForm
            isLoading={false}
            title="Create New Product"
            handleSubmit={handleSubmit}
         />
      </div>
   );
};

export default CreateNewProduct;
