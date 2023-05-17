import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import { useDispatch } from "react-redux";
import UserService from "../services/userService.js";
import { setUser } from "../store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      //Ejecuta código antes de cargar la página
      return redirect("/login");
    },
  },
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
export const Router = () => {
  const userService = UserService();
  const dispatch = useDispatch();
  const getUser = async () => {
    const data = await userService.getUser();
    if (!data) window.location.href = "/login";
    dispatch(setUser(data.user));
  };

  useEffect(() => {
    if (!window.location.href.includes("/login")) {
      getUser();
    }
  }, [localStorage.getItem("access")]);
  return <RouterProvider router={router} />;
};
