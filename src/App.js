import "../style.css"

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"; 
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { BrowserRouter, createBrowserRouter, Outlet, Router, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appLayout = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element:<Menu/>
            },
            {
                path: "about",
                element:<About/>
            },
            {
                path: "contact",
                element:<Contact/>
            },
            {
                path: "error",
                element:<Error/>
            },
        ],
        errorElement:<Error/>
    },
  
])




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <StrictMode>
       <RouterProvider router={appLayout}/>
    </StrictMode>
)