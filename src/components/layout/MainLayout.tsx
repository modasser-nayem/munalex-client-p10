import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
   return (
      <div className="flex flex-col md:flex-row">
         <div className="">
            <Sidebar />
         </div>
         <div className="border-2 border-red-600 w-full">
            <Outlet />
         </div>
      </div>
   );
};

export default MainLayout;
