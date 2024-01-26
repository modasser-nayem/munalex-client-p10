import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: (
         <PrivateRoute>
            <App />
         </PrivateRoute>
      ),
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
