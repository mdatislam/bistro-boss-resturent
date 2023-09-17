import {
    createBrowserRouter,
      } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPage/Menu";
import OrderFood from "../Pages/Order/OrderFood/OrderFood";
import Login from "../Pages/AuthPage/Login";
import SignUp from "../Pages/AuthPage/SignUp";
import SecretPage from "../Pages/SecretPage/SecretPage";
import ProtectedRoute from "../Pages/SecretPage/ProtectedRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminRoute from "../Pages/SecretPage/AdminRoute";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'Menu',
          element:<Menu></Menu>
      },
      {
        path:'Order/:category',
        element:<OrderFood></OrderFood>
      },
      {
        path:'Login',
        element:<Login></Login>
      },
      {
        path:'SignUp',
        element:<SignUp></SignUp>
      },
      
      ]
    },
    {
      path:'DashBoard',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'MyCart',
          element:<MyCart></MyCart>
        },
        {
          path:'AllUsers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'AdminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'UserHome',
          element:<UserHome></UserHome>
        },
        {
          path:'AddItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
      ]
    }
  ]);