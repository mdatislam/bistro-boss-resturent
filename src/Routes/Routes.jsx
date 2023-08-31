import {
    createBrowserRouter,
      } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPage/Menu";
import OrderFood from "../Pages/Order/OrderFood/OrderFood";

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
      }
      ]
    },
  ]);