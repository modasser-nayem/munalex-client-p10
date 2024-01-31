/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Button, Collapse, Typography } from "@material-tailwind/react";
import { useState } from "react";

type TFilterOneSelectProps = {
   items: string[];
   filter: Record<string, any>;
   setFilter: (filter: Record<string, any>) => void;
   filterFiled: string;
   title: string;
   className?: string;
};

const FilterOneSelect = ({
   items = [],
   filter,
   setFilter,
   filterFiled,
   title,
   className,
}: TFilterOneSelectProps) => {
   const [open, setOpen] = useState(false);
   const toggleOpen = () => setOpen((cur) => !cur);

   return (
      <div className={`${className}`}>
         <div
            onClick={toggleOpen}
            className={`flex items-center justify-between ${
               open ? "" : "border-b-[1px] border-blue-gray-200"
            }`}
         >
            <Typography
               variant="h6"
               placeholder=""
               className="mb-1.5 text-black"
            >
               {title}
            </Typography>
            <div className="w-6 h-6 font-medium transition-all">
               {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
         </div>
         <Collapse open={open}>
            <div className="flex flex-col gap-2 px-5">
               {items.map((item: string, i: number) => (
                  <Button
                     key={i}
                     variant={
                        filter[filterFiled] === item ? "filled" : "outlined"
                     }
                     size="sm"
                     placeholder=""
                     className="py-1.5 hover:bg-blue-gray-300 hover:text-white"
                     onClick={() =>
                        setFilter({
                           ...filter,
                           [filterFiled]:
                              filter[filterFiled] === item ? "" : item,
                        })
                     }
                  >
                     {item}
                  </Button>
               ))}
            </div>
         </Collapse>
      </div>
   );
};

export default FilterOneSelect;
