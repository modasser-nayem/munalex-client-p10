import {
   Button,
   Card,
   CardBody,
   CardFooter,
   Option,
   Select,
   Typography,
} from "@material-tailwind/react";
import { useGetSalesHistoryQuery } from "../../redux/features/sales/salesApi";
import { useState } from "react";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

type TSaleDataType = {
   _id: string;
   productId: string;
   quantity: number;
   buyer: string;
   date: string;
};

const SalesHistory = () => {
   const [category, setCategory] = useState("weekly");
   const { data, isLoading } = useGetSalesHistoryQuery(category);
   const onChange = (e: string) => {
      setCategory(e);
   };

   if (isLoading) {
      return <Loading />;
   }

   return (
      <div className="my-10 mx-5">
         <div className="w-72 mx-auto mt-10 mb-5">
            <Select
               placeholder=""
               value={category}
               defaultValue={category}
               label="History Category"
               onChange={(e) => onChange(e ? e : category)}
               size="lg"
            >
               <Option value="daily">Daily</Option>
               <Option value="weekly">Weekly</Option>
               <Option value="monthly">Monthly</Option>
               <Option value="yearly">Yearly</Option>
            </Select>
         </div>
         <div className="flex gap-6 flex-wrap mx-auto">
            {data &&
               data.data.map((item: TSaleDataType) => (
                  <Card
                     placeholder=""
                     className="mt-6 w-72"
                     key={item.productId}
                  >
                     <CardBody placeholder="">
                        <Typography
                           placeholder=""
                           color="blue-gray"
                           className="mb-2 text-lg font-semibold flex gap-2 items-start"
                        >
                           <p className="text-gray-800">Buyer Name:</p>{" "}
                           <p className="text-gray-700">{item.buyer}</p>
                        </Typography>
                        <Typography
                           placeholder=""
                           color="blue-gray"
                           className="mb-2 flex gap-2 items-center"
                        >
                           <p className="text-gray-800 font-medium">
                              Sale At:{" "}
                           </p>{" "}
                           <p className="text-gray-700">
                              {item.date.slice(0, 10)}
                           </p>
                        </Typography>
                        <Typography
                           placeholder=""
                           color="blue-gray"
                           className="mb-2 flex gap-2 items-center"
                        >
                           <p className="text-gray-800 font-medium">
                              Quantity:{" "}
                           </p>{" "}
                           <p className="text-gray-700">{item.quantity}</p>
                        </Typography>
                     </CardBody>
                     <CardFooter
                        placeholder=""
                        className="pt-0"
                     >
                        <Link to={`/products/${item.productId}`}>
                           <Button
                              placeholder=""
                              variant="filled"
                              size="sm"
                           >
                              Product Details
                           </Button>
                        </Link>
                     </CardFooter>
                  </Card>
               ))}
         </div>
      </div>
   );
};

export default SalesHistory;
