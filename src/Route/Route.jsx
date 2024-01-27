import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import EmptyComponent from '../pages/EmptyComponent/EmptyComponent';

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <EmptyComponent></EmptyComponent>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
  ]);