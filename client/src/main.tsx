import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Page from "./Page.tsx";
import Signin from "./page/Signin.tsx";
import Authlayout from "./layouts/Authlayout.tsx";
import Layout from "./layouts/Sidebarlayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />{" "}
      </Layout>
    ),
  },
  {
    path: "/page",
    element: <Page />,
  },
  {
    path: "",
    element: <Authlayout />,
    children: [{ path: "signin", element: <Signin /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
