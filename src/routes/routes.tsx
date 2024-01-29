import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import AllProduct from "../pages/ProductManagement/AllProduct";
import CreateNewProduct from "../pages/ProductManagement/CreateNewProduct";
import SingleProduct from "../pages/ProductManagement/SingleProduct";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: (
         <PrivateRoute>
            <App />
         </PrivateRoute>
      ),
      children: [
         {
            index: true,
            element: <AllProduct />,
         },
         {
            path: "products",
            element: <AllProduct />,
         },
         {
            path: "products/:id",
            element: <SingleProduct />,
         },
         {
            path: "create-product",
            element: <CreateNewProduct />,
         },
         {
            path: "sales-history",
            element: <SingleProduct />,
         },
         {
            path: "all-sales",
            element: <CreateNewProduct />,
         },
      ],
   },
   {
      path: "/register",
      element: <Register />,
   },
   {
      path: "/login",
      element: <Login />,
   },
]);
