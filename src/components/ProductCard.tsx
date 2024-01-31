import {
   DocumentDuplicateIcon,
   PencilSquareIcon,
   TrashIcon,
} from "@heroicons/react/24/solid";
import {
   Card,
   CardHeader,
   Typography,
   Button,
   CardBody,
   CardFooter,
   ButtonGroup,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SaleProduct from "../pages/ProductManagement/SaleProduct";
import { useDeleteProductMutation } from "../redux/features/product/productApi";
import { toast } from "sonner";
import { isReduxRTQError } from "../redux/api/baseApi";

export type TProductCardProps = {
   _id?: string;
   id: string;
   name: string;
   image: string;
   model: string;
   price: number;
   quantity: number;
   brand: string;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   features: any;
};

const ProductCard = ({
   id,
   name,
   image,
   model,
   price,
   quantity,
   brand,
   features,
}: TProductCardProps) => {
   const [deleteProduct, { isLoading, data, error }] =
      useDeleteProductMutation();

   let toastId;
   if (data) {
      toastId = toast.success(data?.message);
   }
   if (error) {
      if (isReduxRTQError(error)) {
         toast.error(error.data.message, { id: toastId });
      } else {
         toast.error("Failed to delete product, server error, try again", {
            id: toastId,
         });
      }
   }

   return (
      <Card
         placeholder=""
         className="mt-6 w-96 h-full flex flex-col justify-between"
      >
         <div>
            <CardHeader
               placeholder=""
               color="blue-gray"
               className="relative h-56"
            >
               <img
                  src={image}
                  alt="card-image"
               />
            </CardHeader>
            <CardBody placeholder="">
               <Typography
                  placeholder=""
                  variant="h5"
                  color="blue-gray"
                  className="mb-2"
               >
                  {name}
               </Typography>
               <div className="">
                  <p>Brand: {brand}</p>
                  <p>Model: {model}</p>
                  <p>Price: {price}</p>
                  <p>Quantity: {quantity}</p>
               </div>
               <div className="flex items-center justify-between">
                  <Typography
                     placeholder=""
                     variant="h6"
                     color="blue-gray"
                     className="text-lg"
                  >
                     Features
                  </Typography>
                  <Link
                     className="hover:text-blue-500 text-orange-500 text-base font-semibold"
                     to={`/products/${id}`}
                  >
                     {"( See Details... )"}
                  </Link>
               </div>
               <div>
                  {features &&
                     Object.entries(features).map((item, i) => (
                        <div
                           key={i}
                           className="flex items-start gap-1"
                        >
                           <Typography
                              placeholder=""
                              variant="h6"
                           >
                              {item[0]}
                           </Typography>
                           {":"}
                           <Typography placeholder="">{`${item[1]}`}</Typography>
                        </div>
                     ))}
               </div>
            </CardBody>
         </div>
         <CardFooter
            placeholder=""
            className="pt-0 border-2"
         >
            <ButtonGroup placeholder="">
               <Button
                  onClick={() => deleteProduct(`${id}`)}
                  className="hover:scale-105 flex items-center gap-1"
                  placeholder=""
                  loading={isLoading}
               >
                  Delete
                  <TrashIcon className="h-4 w-4 text-white" />
               </Button>
               <Link
                  className="rounded-none"
                  to={`/duplicate-product/${id}`}
               >
                  <Button
                     className="hover:scale-105 flex items-center gap-1 rounded-none"
                     placeholder=""
                  >
                     <DocumentDuplicateIcon className="h-4 w-4 text-white" />
                     Duplicate
                  </Button>
               </Link>
               <SaleProduct productId={id} />
            </ButtonGroup>
            <Link to={`/update-product/${id}`}>
               <Button
                  className="mt-3 w-full hover:scale-105 flex items-center justify-center gap-1 bg-orange-500"
                  placeholder=""
               >
                  Edit
                  <PencilSquareIcon className="h-4 w-4 text-white" />
               </Button>
            </Link>
         </CardFooter>
      </Card>
   );
};

export default ProductCard;
