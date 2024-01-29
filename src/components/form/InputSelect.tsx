import { Option, Select } from "@material-tailwind/react";

type TInputSelectOption = {
   name: string;
   value: string;
};

type TInputSelectProps = {
   label: string;
   options: TInputSelectOption[];
   defaultValue?: string;
};

const InputSelect = ({ label, options, defaultValue }: TInputSelectProps) => {
   return (
      <div className="w-full mb-5">
         <Select
            placeholder=""
            label={label}
            defaultValue={defaultValue && defaultValue}
         >
            {options.map((item, i) => (
               <Option
                  key={i}
                  value={item.value}
               >
                  {item.name}
               </Option>
            ))}
         </Select>
      </div>
   );
};

export default InputSelect;
