import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
      {
        index:true,
        Component:Home,
        loader:async( )
      },
      {
        path:"/Movie",
        Component:Movie
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
