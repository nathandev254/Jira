import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Page from "./Page.tsx";
// import Signup from "./page/Signup.tsx";
import Signin from "./page/Signin.tsx";
import Authlayout from "./page/Authlayout.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/page",
    element:<Page/>
  },
  {
    path:"",
    element:<Authlayout/>,
    children: [
      { path: "signin", element: <Signin /> },
      // { path: "signup", element: <Signup /> },
    ],
  }
 

]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
