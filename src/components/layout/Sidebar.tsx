import {
   Card,
   Typography,
   List,
   ListItem,
   ListItemPrefix,
   ListItemSuffix,
   Chip,
} from "@material-tailwind/react";
import {
   UserCircleIcon,
   InboxIcon,
   PowerIcon,
   PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logOutUser } from "../../redux/features/auth/authSlice";

const Sidebar = () => {
   const dispatch = useAppDispatch();

   return (
      <Card
         placeholder=""
         className="md:h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none"
      >
         <div className="mb-2 p-4">
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
                     <UserCircleIcon className="h-5 w-5" />
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
                     <PlusCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Sales History
               </ListItem>
            </Link>
            <Link to="/all-sales">
               <ListItem placeholder="">
                  <ListItemPrefix placeholder="">
                     <InboxIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  All Sales
                  <ListItemSuffix placeholder="">
                     <Chip
                        value="14"
                        size="sm"
                        variant="ghost"
                        color="blue-gray"
                        className="rounded-full"
                     />
                  </ListItemSuffix>
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
      </Card>
   );
};

export default Sidebar;
