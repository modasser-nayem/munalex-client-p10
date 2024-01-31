import {
   Typography,
   List,
   ListItem,
   ListItemPrefix,
} from "@material-tailwind/react";
import {
   PowerIcon,
   PlusCircleIcon,
   ChartBarIcon,
   BuildingStorefrontIcon,
   XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logOutUser } from "../../redux/features/auth/authSlice";

const Sidebar = () => {
   const dispatch = useAppDispatch();

   return (
      <div className="">
         <div className="mb-3 p-5">
            <Typography
               placeholder=""
               variant="h5"
               color="blue-gray"
            >
               Munalex
            </Typography>
         </div>
         <List placeholder="">
            <Link to="/products">
               <ListItem placeholder="">
                  <ListItemPrefix placeholder="">
                     <BuildingStorefrontIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Products
               </ListItem>
            </Link>
            <Link to="/create-product">
               <ListItem placeholder="">
                  <ListItemPrefix placeholder="">
                     <PlusCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Create New Product
               </ListItem>
            </Link>
            <Link to="/sales-history">
               <ListItem placeholder="">
                  <ListItemPrefix placeholder="">
                     <ChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Sales History
               </ListItem>
            </Link>
            <ListItem
               placeholder=""
               onClick={() => dispatch(logOutUser())}
            >
               <ListItemPrefix placeholder="">
                  <PowerIcon className="h-5 w-5" />
               </ListItemPrefix>
               Log Out
            </ListItem>
         </List>
      </div>
   );
};

export default Sidebar;
