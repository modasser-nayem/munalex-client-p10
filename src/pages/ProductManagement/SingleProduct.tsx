import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/product/productApi";
import Loading from "../../components/Loading";
import { Typography } from "@material-tailwind/react";

const SingleProduct = () => {
   const params = useParams();
   const { data, isLoading, isError } = useGetSingleProductQuery(params.id);
   return (
      <>
         {isLoading ? (
            <Loading />
         ) : isError ? (
            <Loading />
         ) : (
            <div>
               <div>
                  <img
                     src={data.data.image}
                     alt=""
                  />
                  <Typography
                     placeholder=""
                     variant="h4"
                  >
                     {data.data.name}
                  </Typography>
                  <div>
                     <div className="mt-5">
                        <Typography
                           placeholder=""
                           variant="h5"
                        >
                           Features
                        </Typography>
                        {data.data.features &&
                           Object.entries(data.data.features).map((item, i) => (
                              <div
                                 key={i}
                                 className="flex items-center gap-1"
                              >
                                 <Typography
                                    placeholder=""
                                    variant="h6"
                                 >
                                    {item[0]}
                                 </Typography>
                                 {":"}
                                 <Typography placeholder="">
                                    {item[1]}
                                 </Typography>
                              </div>
                           ))}
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default SingleProduct;
