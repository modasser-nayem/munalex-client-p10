/* eslint-disable @typescript-eslint/no-explicit-any */
import {
   Menu,
   MenuHandler,
   Button,
   MenuList,
   MenuItem,
   Checkbox,
   Option,
   Select,
} from "@material-tailwind/react";
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
         <div className="flex items-center flex-wrap gap-5">
            {/* categories */}
            <div className="w-fit">
               <Select
                  placeholder=""
                  value={filter.category}
                  label="Filter by Category"
                  onChange={(e) => setFilter({ ...filter, category: e })}
                  size="md"
                  className=""
               >
                  {filteringData.categories.map((item: string, i: number) => (
                     <Option
                        value={item}
                        key={i}
                     >
                        {item}
                     </Option>
                  ))}
               </Select>
            </div>
            {/* Brand filter */}
            <div className="w-fit">
               <Select
                  placeholder=""
                  value={filter.brand}
                  label="Filter by Brand"
                  onChange={(e) => setFilter({ ...filter, brand: e })}
                  size="md"
                  className=""
               >
                  {filteringData.brands.map((item: string, i: number) => (
                     <Option
                        value={item}
                        key={i}
                     >
                        {item}
                     </Option>
                  ))}
               </Select>
            </div>
            <div>
               <Menu>
                  <MenuHandler>
                     <Button placeholder="">Brand</Button>
                  </MenuHandler>
                  <MenuList placeholder="">
                     <MenuItem
                        placeholder=""
                        className="p-0"
                     >
                        <label
                           htmlFor="item-1"
                           className="flex cursor-pointer items-center gap-2 p-2"
                        >
                           <Checkbox
                              crossOrigin=""
                              id="item-1"
                              containerProps={{ className: "p-0" }}
                              className="hover:before:content-none"
                              // onClick={() => setFilter("apple")}
                           />
                           Menu Item 1
                        </label>
                     </MenuItem>
                     <MenuItem
                        placeholder=""
                        className="p-0"
                     >
                        <label
                           htmlFor="item-2"
                           className="flex cursor-pointer items-center gap-2 p-2"
                        >
                           <Checkbox
                              crossOrigin=""
                              id="item-2"
                              containerProps={{ className: "p-0" }}
                              className="hover:before:content-none"
                           />
                           Menu Item 2
                        </label>
                     </MenuItem>
                     <MenuItem
                        placeholder=""
                        className="p-0"
                     >
                        <label
                           htmlFor="item-3"
                           className="flex cursor-pointer items-center gap-2 p-2"
                        >
                           <Checkbox
                              crossOrigin=""
                              id="item-3"
                              containerProps={{ className: "p-0" }}
                              className="hover:before:content-none"
                           />
                           Menu Item 3
                        </label>
                     </MenuItem>
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
