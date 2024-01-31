import { Fragment, useState } from "react";
import { useDynamicFilteringDataQuery } from "../../redux/features/product/productApi";
import Loading from "../Loading";
import ProductFiltering from "../ProductFiltering";
import { Drawer, Tooltip, Typography } from "@material-tailwind/react";
import {
   Bars3CenterLeftIcon,
   ChevronDownIcon,
   ChevronUpIcon,
   XMarkIcon,
} from "@heroicons/react/24/solid";

type TFilterSidebarProps = {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   filter: Record<string, any>;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   setFilter: (filter: Record<string, any>) => void;
};

const FilterSidebar = ({ filter, setFilter }: TFilterSidebarProps) => {
   const [open, setOpen] = useState(false);

   const openDrawer = () => setOpen(true);
   const closeDrawer = () => setOpen(false);

   // get filtering data
   const { data: dynamicFilterData, isLoading: isDynamicFilterLoading } =
      useDynamicFilteringDataQuery(undefined);
   return (
      <Fragment>
         <Typography
            placeholder=""
            onClick={openDrawer}
            variant="h5"
            className="bg-gray-200 rounded-lg px-3 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-300"
         >
            Filter
            <div className="w-4 h-4">
               {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
         </Typography>
         <Drawer
            placeholder=""
            placement="right"
            open={open}
            onClose={closeDrawer}
            className="p-4"
         >
            <div className="mb-6 flex items-center justify-between">
               <XMarkIcon
                  onClick={closeDrawer}
                  className="w-8 h-8 hover:scale-110 transition-all"
               />
               <Typography
                  placeholder=""
                  variant="h5"
                  color="blue-gray"
               >
                  Filter Product
               </Typography>
            </div>
            <div>
               <div className="h-[92vh] overflow-y-auto w-full max-w-[18rem] p-5">
                  {isDynamicFilterLoading ? (
                     <Loading />
                  ) : !dynamicFilterData ? (
                     <Loading />
                  ) : (
                     <div className="rounded-none">
                        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center"></div>
                        <ProductFiltering
                           filteringData={dynamicFilterData.data}
                           filter={filter}
                           setFilter={setFilter}
                        />
                     </div>
                  )}
               </div>
            </div>
         </Drawer>
      </Fragment>
   );
};

export default FilterSidebar;
