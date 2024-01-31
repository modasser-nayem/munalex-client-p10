import {
   useDynamicFilteringDataQuery,
   useGetAllProductsQuery,
} from "../../redux/features/product/productApi";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
   Card,
   CardHeader,
   Typography,
   CardBody,
   Input,
} from "@material-tailwind/react";
import ProductCard, { TProductCardProps } from "../../components/ProductCard";
import Loading from "../../components/Loading";
import ProductFiltering from "../../components/ProductFiltering";
import { useState } from "react";

const AllProduct = () => {
   const [filter, setFilter] = useState({});
   // get filtering data
   const { data: dynamicFilterData, isLoading: isDynamicFilterLoading } =
      useDynamicFilteringDataQuery(undefined);

   // get all product
   const { data, isLoading } = useGetAllProductsQuery(undefined);

   console.log(filter);
   return (
      <div>
         <Card
            placeholder=""
            className="h-full w-full"
         >
            {isDynamicFilterLoading ? (
               <Loading />
            ) : !dynamicFilterData ? (
               <Loading />
            ) : (
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
                              crossOrigin=""
                              label="Search"
                              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                           />
                        </div>
                     </div>
                  </div>
                  <ProductFiltering
                     filteringData={dynamicFilterData.data}
                     filter={filter}
                     setFilter={setFilter}
                  />
               </CardHeader>
            )}
            <CardBody
               key="5"
               placeholder=""
               className="flex flex-wrap gap-8"
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
                        <div
                           className="w-fit"
                           key={_id}
                        >
                           <ProductCard
                              id={_id as string}
                              name={name}
                              image={image}
                              model={model}
                              price={price}
                              quantity={quantity}
                              brand={brand}
                              features={features}
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
