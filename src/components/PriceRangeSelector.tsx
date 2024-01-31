import { Input } from "@material-tailwind/react";

type TPriceRangeSelectorProps = {
   minPrice: number;
   maxPrice: number;
   onMinPriceChange: (number: number) => void;
   onMaxPriceChange: (number: number) => void;
};

const PriceRangeSelector = ({
   minPrice,
   maxPrice,
   onMinPriceChange,
   onMaxPriceChange,
}: TPriceRangeSelectorProps) => {
   return (
      <div className="flex items-center justify-center">
         <div className="">
            <Input
               crossOrigin=""
               label="Min Price"
               type="number"
               value={minPrice}
               onChange={(e) => onMinPriceChange(Number(e.target.value))}
            />
         </div>
         <span className="mx-4 text-gray-700">to</span>
         <div className="">
            <Input
               crossOrigin=""
               label="Max Price"
               type="number"
               value={maxPrice}
               onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            />
         </div>
      </div>
   );
};

export default PriceRangeSelector;
