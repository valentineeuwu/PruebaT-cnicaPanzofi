import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/userpage",
    element: <UserPage></UserPage>,
  },
  {
    path: "/adminpage",
    element: <AdminPage></AdminPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
