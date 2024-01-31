import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import ProductCard, { TProductCardProps } from "../../components/ProductCard";
import Loading from "../../components/Loading";
import { useState } from "react";
import FilterSidebar from "../../components/layout/FilterSidebar";

type TFilter = {
   minPrice?: number;
   maxPrice?: number;
   releaseDateStart?: Date;
   releaseDateEnd?: Date;
   brand?: string;
   model?: string;
   category?: string;
   operatingSystem?: string;
   connectivity?: [];
   powerSource?: string;
   search?: string;
};

const AllProduct = () => {
   const [filter, setFilter] = useState<TFilter>({
      connectivity: [],
   });

   // get all product
   const { data, isLoading } = useGetAllProductsQuery(filter);

   console.log(filter);
   return (
      <div className="flex">
         <div className="w-full border-2 h-screen overflow-y-auto">
            <div className="flex gap-5 justify-between p-5 bg-white">
               <div className="w-full md:w-72">
                  <Input
                     crossOrigin=""
                     label="Search"
                     onChange={(e) =>
                        setFilter({
                           ...filter,
                           search: e.target.value,
                        })
                     }
                     icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
               </div>
               <FilterSidebar
                  filter={filter}
                  setFilter={setFilter}
               />
            </div>
            <div className="flex flex-wrap gap-8">
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
            </div>
         </div>
      </div>
   );
};

export default AllProduct;
