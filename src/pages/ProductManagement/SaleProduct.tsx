import React from "react";
import {
   Button,
   Dialog,
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   Typography,
   Input,
   Checkbox,
} from "@material-tailwind/react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import FormWrapper from "../../components/form/FormWrapper";
import InputItem from "../../components/form/InputItem";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useSaleProductMutation } from "../../redux/features/sales/salesApi";
import { toast } from "sonner";

type TSaleProductProps = {
   productId: string;
};

const SaleProduct = ({ productId }: TSaleProductProps) => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen((cur) => !cur);

   const [saleProduct, { isLoading, isError, isSuccess, data, error }] =
      useSaleProductMutation();

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

   const handleOnSubmit: SubmitHandler<FieldValues> = async (formData) => {
      if (formData.quantity) {
         formData.quantity = Number(formData.quantity);
      }
      await saleProduct({ ...formData, productId });
      if (isSuccess) {
         setOpen(!open);
      }
   };

   return (
      <>
         <Button
            onClick={handleOpen}
            className="hover:scale-105 flex items-center gap-1"
            placeholder=""
         >
            Sell
            <ShoppingBagIcon className="h-4 w-4 text-white" />
         </Button>
         <Dialog
            placeholder=""
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
         >
            <FormWrapper onSubmit={handleOnSubmit}>
               <Card
                  placeholder=""
                  className="mx-auto w-full max-w-[24rem]"
               >
                  <CardBody
                     placeholder=""
                     className="flex flex-col gap-4"
                  >
                     <InputItem
                        label="Quantity"
                        name="quantity"
                        type="number"
                        placeholder="Provide product quantity"
                     />
                     <InputItem
                        label="Buyer Name"
                        name="buyer"
                        type="text"
                        placeholder="Provide buyer name"
                     />
                     <InputItem
                        label="Sell Date"
                        name="date"
                        type="date"
                        placeholder="Provide sell date"
                     />
                  </CardBody>
                  <CardFooter
                     placeholder=""
                     className="pt-0 flex items-center justify-between"
                  >
                     <Button
                        placeholder=""
                        variant="gradient"
                        onClick={handleOpen}
                     >
                        Cancel
                     </Button>
                     <Button
                        placeholder=""
                        type="submit"
                        variant="gradient"
                        loading={isLoading}
                     >
                        Sale
                     </Button>
                  </CardFooter>
               </Card>
            </FormWrapper>
         </Dialog>
      </>
   );
};

export default SaleProduct;
