import { Outlet } from "react-router-dom";
import NavSidebar from "./NavSidebar";

const MainLayout = () => {
   return (
      <div className="flex">
         <div className="w-[20rem] h-screen fixed border-2">
            <NavSidebar />
         </div>
         <div className="w-full pl-[20rem]">
            <Outlet />
         </div>
      </div>
   );
};

export default MainLayout;
