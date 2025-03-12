import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Page from "./Page.tsx";
import Signup from "./page/Signup.tsx";
import Signin from "./page/Signin.tsx";

// Define your router
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
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/signin",
    element:<Signin/>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
