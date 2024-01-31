import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import AllProduct from "../pages/ProductManagement/AllProduct";
import CreateNewProduct from "../pages/ProductManagement/CreateNewProduct";
import SingleProduct from "../pages/ProductManagement/SingleProduct";
import ProductUpdate from "../pages/ProductManagement/ProductUpdate";
import DuplicateProduct from "../pages/ProductManagement/DuplicateProduct";
import SalesHistory from "../pages/ProductManagement/SalesHistory";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../components/layout/MainLayout";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: (
         <PrivateRoute>
            <MainLayout />
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
            path: "update-product/:id",
            element: <ProductUpdate />,
         },
         {
            path: "duplicate-product/:id",
            element: <DuplicateProduct />,
         },
         {
            path: "create-product",
            element: <CreateNewProduct />,
         },
         {
            path: "sales-history",
            element: <SalesHistory />,
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
   {
      path: "*",
      element: <ErrorPage />,
   },
]);
