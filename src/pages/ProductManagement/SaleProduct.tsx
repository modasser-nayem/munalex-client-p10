import {
   Button,
   Dialog,
   Card,
   CardBody,
   CardFooter,
   Typography,
} from "@material-tailwind/react";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/solid";
import FormWrapper from "../../components/form/FormWrapper";
import InputItem from "../../components/form/InputItem";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useSaleProductMutation } from "../../redux/features/sales/salesApi";
import { toast } from "sonner";
import { isReduxRTQError } from "../../redux/api/baseApi";
import { useState } from "react";

type TSaleProductProps = {
   productId: string;
};

const SaleProduct = ({ productId }: TSaleProductProps) => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen((cur) => !cur);

   const [saleProduct, { isLoading, isSuccess, data, error }] =
      useSaleProductMutation();

   let toastId;
   if (isSuccess) {
      toastId = toast.success(data?.message);
   }
   if (error) {
      if (isReduxRTQError(error)) {
         toast.error(error.data.message, { id: toastId });
      } else {
         toast.error("Failed to sale product, server error, try again", {
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
         setOpen((cur) => !cur);
      }
   };

   return (
      <>
         <Button
            onClick={handleOpen}
            className="hover:scale-105 flex items-center gap-1 rounded-s-none rounded-e-lg"
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
                     <div className="flex items-center justify-between mb-4">
                        <Typography
                           placeholder=""
                           variant="h4"
                           color="blue-gray"
                        >
                           Sale Product
                        </Typography>
                        <XMarkIcon
                           onClick={handleOpen}
                           className="h-8 w-8 hover:scale-75 transition-all"
                        />
                     </div>
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
                     className="pt-0 flex justify-end"
                  >
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
