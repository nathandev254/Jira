import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Signin from "./page/Signin.tsx";
import Authlayout from "./layouts/Authlayout.tsx";
import Layout from "./layouts/Sidebarlayout.tsx";
import Dashboard from "./page/Dashboard.tsx";
import Tasks from "./page/Tasks.tsx";
import Projects from "./page/Projects.tsx";
import Teams from "./page/Teams.tsx";
import Report from "./page/Report.tsx";
import Settings from "./page/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "tasks", element: <Tasks /> },
      { path: "projects", element: <Projects /> },
      { path: "Teams", element: <Teams /> },
      { path: "report", element: <Report /> },
      { path: "settings", element: <Settings /> },
    ],
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
