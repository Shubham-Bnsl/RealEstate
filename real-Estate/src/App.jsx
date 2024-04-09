import React from 'react'
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignOut from './pages/SignOut';


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home /> ,
    },
    {
      path: "/about",
      element:<About /> ,
    },
    {
      path: "/profile",
      element:<Profile /> ,
    },
    {
      path: "/signin",
      element:<Signin /> ,
    },
    {
      path: "/signOut",
      element:<SignOut /> ,
    },
  ]);

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}
