/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import FormWrapper from "./FormWrapper";
import InputItem from "./InputItem";
import InputSelect from "./InputSelect";
import { useState } from "react";
import {
   Bars2Icon,
   PlusCircleIcon,
   TrashIcon,
} from "@heroicons/react/24/solid";
import { Button, Input } from "@material-tailwind/react";

type TProductFormProps = {
   isLoading: boolean;
   title: string;
   buttonTitle: string;
   handleSubmit: any;
   defaultValues?: any;
};

const ProductForm = ({
   isLoading = false,
   handleSubmit,
   title,
   buttonTitle,
   defaultValues,
}: TProductFormProps) => {
   const [connectivity, setConnectivity] = useState<string[]>(
      defaultValues?.connectivity || []
   );
   const [addConnectivityValue, setAddConnectivityValue] = useState("");
   const [features, setFeatures] = useState(defaultValues?.features || {});
   const featuresArray = Object.entries(features).map((item) => item);
   const [addFeatureName, setFeatureName] = useState("");
   const [addFeatureValue, setFeatureValue] = useState("");

   const onSubmit: SubmitHandler<FieldValues> = (formData) => {
      handleSubmit({ ...formData, features, connectivity });
   };

   return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="shadow-2xl md:w-[32rem] p-5">
            <h2 className="text-2xl font-semibold text-center mb-8">{title}</h2>
            <FormWrapper
               defaultValues={defaultValues && defaultValues}
               onSubmit={onSubmit}
            >
               <InputItem
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Provide product name"
                  error=""
               />
               <InputItem
                  label="Price"
                  name="price"
                  type="number"
                  placeholder="Provide product price"
                  error=""
               />
               <InputItem
                  label="Quantity"
                  name="quantity"
                  type="number"
                  placeholder="Provide product quantity"
                  error=""
               />
               <InputItem
                  label="Release Date"
                  name="releaseDate"
                  type="date"
                  placeholder="Provide product Release Date"
                  error=""
               />
               <InputItem
                  label="Model"
                  name="model"
                  type="text"
                  placeholder="Provide product Model"
                  error=""
               />
               <InputItem
                  label="Brand"
                  name="brand"
                  type="text"
                  placeholder="Provide product Brand"
                  error=""
               />
               <InputItem
                  label="Category"
                  name="category"
                  type="text"
                  placeholder="Provide product Category"
                  error=""
               />
               <InputSelect
                  label="Operating System"
                  options={[
                     { name: "Android", value: "android" },
                     { name: "Mac OS,", value: "macOS," },
                     { name: "Windows", value: "windows" },
                     { name: "Linux", value: "linux" },
                     { name: "IOS", value: "iOS" },
                  ]}
               />
               {/* connectivity */}
               <div className="mb-5 text-gray-600">
                  <h3 className="font-medium mb-1">Connectivity</h3>
                  <div className="border-[1px] border-gray-400 px-2.5 py-2 rounded-md">
                     <div className="flex flex-wrap items-center gap-2 mb-3">
                        {connectivity &&
                           connectivity.map((item) => (
                              <div
                                 onClick={() => {
                                    const newConnectivity = connectivity.filter(
                                       (i) => i !== item
                                    );
                                    setConnectivity(newConnectivity);
                                 }}
                                 className="flex items-center gap-1 w-fit px-3 py-1.5 rounded-md text-sm text-white hover:scale-105 transition-all bg-black hover:shadow-lg hover:cursor-pointer group"
                              >
                                 <p>{item}</p>
                                 <TrashIcon className="h-4 w-4 hidden group-hover:block text-white" />
                              </div>
                           ))}
                     </div>
                     <div className="relative flex w-fit">
                        <Input
                           type="text"
                           label="Add connectivity"
                           value={addConnectivityValue}
                           onChange={(e) =>
                              setAddConnectivityValue(e.target.value)
                           }
                           className="pr-20"
                           crossOrigin=""
                           containerProps={{
                              className: "min-w-0",
                           }}
                        />
                        <Button
                           placeholder=""
                           size="sm"
                           color={addConnectivityValue ? "gray" : "blue-gray"}
                           disabled={!addConnectivityValue}
                           className="!absolute right-1 top-1 rounded px-2.5"
                           onClick={() => {
                              if (
                                 !connectivity.includes(addConnectivityValue)
                              ) {
                                 setConnectivity([
                                    ...connectivity,
                                    addConnectivityValue,
                                 ]);
                                 setAddConnectivityValue("");
                              } else {
                                 setAddConnectivityValue("");
                              }
                           }}
                        >
                           <div className="flex items-center gap-1">
                              Add
                              <PlusCircleIcon className="h-4 w-4 text-white" />
                           </div>
                        </Button>
                     </div>
                  </div>
               </div>
               <InputItem
                  label="Power Source"
                  name="powerSource"
                  type="text"
                  placeholder="Provide product Power Source"
                  error=""
               />
               {/* features */}
               <div className="mb-5 text-gray-600">
                  <h3 className="font-medium mb-1">Features</h3>
                  <div className="border-[1px] border-gray-400 px-2.5 py-2 rounded-md">
                     <div className="flex flex-wrap items-center gap-2 mb-3">
                        {featuresArray &&
                           featuresArray.map((item) => (
                              <div
                                 onClick={() => {
                                    delete features[`${item[0]}`];
                                    setFeatures({ ...features });
                                 }}
                                 className="flex items-center gap-1 w-fit px-3 py-1.5 rounded-md text-sm text-white hover:scale-105 transition-all bg-black hover:shadow-lg hover:cursor-pointer group"
                              >
                                 <p className="text-white flex items-center gap-2">
                                    {item[0]}
                                    <Bars2Icon className="h-4 w-4" />
                                    {`${item[1]}`}
                                 </p>
                                 <TrashIcon className="h-4 w-4 hidden group-hover:block text-white" />
                              </div>
                           ))}
                     </div>
                     <div className="w-full">
                        <div className="flex items-center justify-between gap-2">
                           <Input
                              type="text"
                              label="Name"
                              value={addFeatureName}
                              onChange={(e) => setFeatureName(e.target.value)}
                              className="w-full"
                              crossOrigin=""
                           />
                           <Input
                              type="text"
                              label="Value"
                              value={addFeatureValue}
                              onChange={(e) => setFeatureValue(e.target.value)}
                              className="w-full"
                              crossOrigin=""
                           />
                        </div>
                        <Button
                           placeholder=""
                           size="sm"
                           color={
                              addFeatureName && addFeatureValue
                                 ? "gray"
                                 : "blue-gray"
                           }
                           disabled={!addFeatureName && !addFeatureValue}
                           className="rounded px-2.5 w-full mt-2"
                           onClick={() => {
                              const existFeature =
                                 features[`${addFeatureName}`];
                              if (!existFeature) {
                                 setFeatures({
                                    ...features,
                                    [addFeatureName]: addFeatureValue,
                                 });
                                 setFeatureName("");
                                 setFeatureValue("");
                              } else {
                                 setFeatureName("");
                                 setFeatureValue("");
                              }
                           }}
                        >
                           <div className="flex items-center justify-center gap-1">
                              Add
                              <PlusCircleIcon className="h-4 w-4 text-white" />
                           </div>
                        </Button>
                     </div>
                  </div>
               </div>
               <InputItem
                  label="Image Url"
                  name="image"
                  type="text"
                  placeholder="Provide product Image"
                  error=""
               />
               <Button
                  type="submit"
                  loading={isLoading}
                  className="w-full"
                  placeholder=""
               >
                  {buttonTitle}
               </Button>
            </FormWrapper>
         </div>
      </div>
   );
};

export default ProductForm;
