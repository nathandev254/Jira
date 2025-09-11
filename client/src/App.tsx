import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Signin from "./page/Signin";
import Signup from "./page/Signup";
import Authlayout from "./layouts/Authlayout";
import Layout from "./layouts/Sidebarlayout";
import Dashboard from "./page/Dashboard";
import Tasks from "./page/Tasks";
import Projects from "./page/Projects";
import Teams from "./page/Teams";
import Report from "./page/Report";
import Settings from "./page/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // No index route here
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
    children: [
      { index: true, element: <Signup /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

