import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
   ArrowDownTrayIcon,
   MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
   Card,
   CardHeader,
   Typography,
   Button,
   CardBody,
   Chip,
   CardFooter,
   Avatar,
   IconButton,
   Tooltip,
   Input,
} from "@material-tailwind/react";
import ProductCard, { TProductCardProps } from "../../components/ProductCard";
import Loading from "../../components/Loading";

const TABLE_HEAD = ["Product", "Price", "Quantity", "Model", "Brand", ""];

const TABLE_ROWS = [
   {
      img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
      name: "Spotify",
      amount: "$2,500",
      date: "Wed 3:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026",
   },
   {
      img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
      name: "Amazon",
      amount: "$5,000",
      date: "Wed 1:00pm",
      status: "paid",
      account: "master-card",
      accountNumber: "1234",
      expiry: "06/2026",
   },
   {
      img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
      name: "Pinterest",
      amount: "$3,400",
      date: "Mon 7:40pm",
      status: "pending",
      account: "master-card",
      accountNumber: "1234",
      expiry: "06/2026",
   },
   {
      img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
      name: "Google",
      amount: "$1,000",
      date: "Wed 5:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026",
   },
   {
      img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
      name: "netflix",
      amount: "$14,000",
      date: "Wed 3:30am",
      status: "cancelled",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026",
   },
];

const AllProduct = () => {
   const { data, isLoading, isSuccess, isError } =
      useGetAllProductsQuery(undefined);

   console.log(data);
   return (
      <div>
         <Card
            placeholder=""
            className="h-full w-full"
         >
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
                           label="Search"
                           icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                     </div>
                     <Button
                        placeholder=""
                        className="flex items-center gap-3"
                        size="sm"
                     >
                        <ArrowDownTrayIcon
                           strokeWidth={2}
                           className="h-4 w-4"
                        />{" "}
                        Download
                     </Button>
                  </div>
               </div>
            </CardHeader>
            <CardBody
               placeholder=""
               className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5"
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
                        <div className="w-fit">
                           <ProductCard
                              id={_id}
                              name={name}
                              image={image}
                              model={model}
                              price={price}
                              quantity={quantity}
                              brand={brand}
                              features={features}
                              key={_id}
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

{
   /* <table className="w-full min-w-max table-auto text-left">
                  <thead>
                     <tr>
                        {TABLE_HEAD.map((head) => (
                           <th
                              key={head}
                              className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                           >
                              <Typography
                                 placeholder=""
                                 variant="small"
                                 color="blue-gray"
                                 className="font-normal leading-none opacity-70"
                              >
                                 {head}
                              </Typography>
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {products.map(
                        (
                           {
                              name,
                              image,
                              model,
                              price,
                              quantity,
                              brand,
                              features,
                           },
                           index
                        ) => {
                           const isLast = index === TABLE_ROWS.length - 1;
                           const classes = isLast
                              ? "p-4"
                              : "p-4 border-b border-blue-gray-50";

                           return (
                              <tr key={name}>
                                 {/* product */
}
//                <td className={classes}>
//                   <div className="flex items-center gap-3">
//                      <Avatar
//                         placeholder=""
//                         src={image}
//                         alt={name}
//                         size="md"
//                         className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
//                      />
//                      <Typography
//                         placeholder=""
//                         variant="small"
//                         color="blue-gray"
//                         className="font-bold"
//                      >
//                         {name}
//                      </Typography>
//                   </div>
//                </td>
//                {/* price */}
//                <td className={classes}>
//                   <Typography
//                      placeholder=""
//                      variant="small"
//                      color="blue-gray"
//                      className="font-normal"
//                   >
//                      {price}
//                   </Typography>
//                </td>
//                {/* Quantity */}
//                <td className={classes}>
//                   <Typography
//                      placeholder=""
//                      variant="small"
//                      color="blue-gray"
//                      className="font-normal"
//                   >
//                      {quantity}
//                   </Typography>
//                </td>
//                {/* model */}
//                <td className={classes}>
//                   <Typography
//                      placeholder=""
//                      variant="small"
//                      color="blue-gray"
//                      className="font-normal"
//                   >
//                      {model}
//                   </Typography>
//                </td>
//                {/* brand */}
//                <td className={classes}>
//                   <Typography
//                      placeholder=""
//                      variant="small"
//                      color="blue-gray"
//                      className="font-normal"
//                   >
//                      {brand}
//                   </Typography>
//                </td>
//                <td className={classes}>
//                   <Tooltip content="Edit User">
//                      <IconButton
//                         placeholder=""
//                         variant="text"
//                      >
//                         <PencilIcon className="h-4 w-4" />
//                      </IconButton>
//                   </Tooltip>
//                </td>
//             </tr>
//          );
//       }
//    )}
// </tbody>
// </table> */}
