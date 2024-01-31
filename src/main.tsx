import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <ThemeProvider>
         <Toaster
            position="top-center"
            duration={2000}
            richColors
         />
         <Provider store={store}>
            <PersistGate
               loading={null}
               persistor={persistor}
            >
               <RouterProvider router={routes} />
            </PersistGate>
         </Provider>
      </ThemeProvider>
   </React.StrictMode>
);
