/* eslint-disable @typescript-eslint/no-explicit-any */
import {
   Menu,
   MenuHandler,
   Button,
   MenuList,
   MenuItem,
   Checkbox,
} from "@material-tailwind/react";
import FilterOneSelect from "./FilterOneSelect";
import { MouseEvent } from "react";
// import { useState } from "react";
// import PriceRangeSelector from "./PriceRangeSelector";

type TProductFilteringProps = {
   filteringData: Record<string, any>;
   filter: Record<string, any>;
   setFilter: (filter: Record<string, any>) => void;
};

const ProductFiltering = ({
   filteringData,
   filter,
   setFilter,
}: TProductFilteringProps) => {
   // console.log(filteringData);
   // const [minPrice, setMinPrice] = useState(0);
   // const [maxPrice, setMaxPrice] = useState(0);
   // const [brandName, setBrandName] = useState("");
   // const [categoryName, setCategoryName] = useState("");

   return (
      <div>
         <div className="flex flex-col gap-5">
            {/* categories */}
            <FilterOneSelect
               title="Category"
               filterFiled="category"
               filter={filter}
               setFilter={setFilter}
               items={filteringData.categories}
            />
            {/* Brand filter */}
            <FilterOneSelect
               title="Brand"
               filter={filter}
               setFilter={setFilter}
               filterFiled="brand"
               items={filteringData.brands}
            />
            {/* Model filter */}
            <FilterOneSelect
               title="Model"
               filter={filter}
               setFilter={setFilter}
               filterFiled="model"
               items={filteringData.models}
            />
            {/* Operating system filter */}
            <FilterOneSelect
               title="Operating System"
               filter={filter}
               setFilter={setFilter}
               filterFiled="operatingSystem"
               items={["ios", "android", "windows", "linux"]}
            />
            {/* Power Source filter */}
            <FilterOneSelect
               title="Power Source"
               filter={filter}
               setFilter={setFilter}
               filterFiled="powerSource"
               items={filteringData.powerSources}
            />
            <div>
               <Menu
                  dismiss={{
                     itemPress: false,
                  }}
               >
                  <MenuHandler>
                     <Button placeholder="">Menu</Button>
                  </MenuHandler>
                  <MenuList placeholder="">
                     {filteringData.connectivity &&
                        filteringData.connectivity.map(
                           (item: string, i: number) => (
                              <MenuItem
                                 key={i}
                                 placeholder=""
                                 className="p-0"
                              >
                                 <label
                                    htmlFor={`${item}-${i}`}
                                    className="flex cursor-pointer items-center gap-2 p-2"
                                 >
                                    <Checkbox
                                       crossOrigin=""
                                       ripple={false}
                                       id="item-1"
                                       containerProps={{ className: "p-0" }}
                                       onClick={(
                                          e: MouseEvent<HTMLInputElement>
                                       ) =>
                                          setFilter({
                                             ...filter,
                                             connectivity: e.currentTarget
                                                .checked
                                                ? [...filter.connectivity, item]
                                                : filter.connectivity.filter(
                                                     (i: string) => i !== item
                                                  ),
                                          })
                                       }
                                       className="hover:before:content-none"
                                    />
                                    {item}
                                 </label>
                              </MenuItem>
                           )
                        )}
                  </MenuList>
               </Menu>
            </div>
         </div>
         {/* <PriceRangeSelector
            minPrice={filter.minPrice}
            maxPrice={filter.maxPrice}
            setFilter=
         /> */}
      </div>
   );
};

export default ProductFiltering;
