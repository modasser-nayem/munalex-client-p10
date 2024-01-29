import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
   ArrowDownTrayIcon,
   MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
   Card,
   CardHeader,
   Typography,
   Button,
   CardBody,
   Input,
} from "@material-tailwind/react";
import ProductCard, { TProductCardProps } from "../../components/ProductCard";
import Loading from "../../components/Loading";

const AllProduct = () => {
   const { data, isLoading, isSuccess, isError } =
      useGetAllProductsQuery(undefined);
   return (
      <div>
         <Card
            placeholder=""
            className="h-full w-full"
         >
            <CardHeader
               placeholder=""
               floated={false}
               shadow={false}
               className="rounded-none"
            >
               <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                  <div>
                     <Typography
                        placeholder=""
                        variant="h5"
                        color="blue-gray"
                     >
                        Recent Transactions
                     </Typography>
                     <Typography
                        placeholder=""
                        color="gray"
                        className="mt-1 font-normal"
                     >
                        These are details about the last transactions
                     </Typography>
                  </div>
                  <div className="flex w-full shrink-0 gap-2 md:w-max">
                     <div className="w-full md:w-72">
                        <Input
                           label="Search"
                           icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                     </div>
                     <Button
                        placeholder=""
                        className="flex items-center gap-3"
                        size="sm"
                     >
                        <ArrowDownTrayIcon
                           strokeWidth={2}
                           className="h-4 w-4"
                        />{" "}
                        Download
                     </Button>
                  </div>
               </div>
            </CardHeader>
            <CardBody
               key="5"
               placeholder=""
               className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5"
            >
               {isLoading ? (
                  <Loading />
               ) : !data ? (
                  <Loading />
               ) : (
                  data.data.map(
                     ({
                        _id,
                        name,
                        image,
                        model,
                        price,
                        quantity,
                        brand,
                        features,
                     }: TProductCardProps) => (
                        <div className="w-fit">
                           <ProductCard
                              id={_id}
                              name={name}
                              image={image}
                              model={model}
                              price={price}
                              quantity={quantity}
                              brand={brand}
                              features={features}
                              key={_id}
                           />
                        </div>
                     )
                  )
               )}
            </CardBody>
         </Card>
      </div>
   );
};

export default AllProduct;
