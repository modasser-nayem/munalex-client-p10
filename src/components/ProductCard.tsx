import {
   DocumentDuplicateIcon,
   ShoppingBagIcon,
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

export type TProductCardProps = {
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
                     Object.entries(features).map((item) => (
                        <div className="flex items-start gap-1">
                           <Typography
                              placeholder=""
                              variant="h6"
                           >
                              {item[0]}
                           </Typography>
                           {":"}
                           <Typography placeholder="">{item[1]}</Typography>
                        </div>
                     ))}
               </div>
            </CardBody>
         </div>
         <CardFooter
            placeholder=""
            className="pt-0 border-2"
         >
            <ButtonGroup
               placeholder=""
               fullWidth
            >
               <Button
                  className="hover:scale-105 flex items-center gap-1"
                  placeholder=""
               >
                  Delete
                  <TrashIcon className="h-4 w-4 text-white" />
               </Button>
               <Button
                  className="hover:scale-105 flex items-center gap-1"
                  placeholder=""
               >
                  <DocumentDuplicateIcon className="h-4 w-4 text-white" />
                  Duplicate
               </Button>
               <Button
                  className="hover:scale-105 flex items-center gap-1"
                  placeholder=""
               >
                  Sell
                  <ShoppingBagIcon className="h-4 w-4 text-white" />
               </Button>
            </ButtonGroup>
         </CardFooter>
      </Card>
   );
};

export default ProductCard;
