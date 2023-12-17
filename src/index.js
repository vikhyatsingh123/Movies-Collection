import React from 'react';
import {createRoot} from "react-dom/client"
// import "antd/dist/antd.css";
import About from './Components/About';
import App from './App';
import Suggestion from './Components/Suggestion';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
      path: "/about",
      element: <About />
  },
  {
      path: "/suggest",
      element: <Suggestion />
  },
  ]);
  const domNode=document.getElementById('root');
  const root=createRoot(domNode);
  root.render(
      <RouterProvider router={router} />
  )
