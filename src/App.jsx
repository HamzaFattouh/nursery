import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home/Home';
import Root from './component/Root/Root';
import NotFound from "./component/NotFound/NotFound";
import About from "./component/About/About";
import Services from "./component/Services/Services";
import Gallery from "./component/Gallery/Gallery";
import Contact from "./component/Contact/Contact";
import LoginSignup from "./component/Login/LoginSignup";
import UserContextProvider from "./Contexts/User";


const Router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/login",
        element: <LoginSignup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]

  }

])

export default function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={Router}/>
      </UserContextProvider>
    </>
  );
}