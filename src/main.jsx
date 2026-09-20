import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx'
import MovieDetail from './pages/MovieDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
      {
        index:true,
        Component:Home,
       loader: async () => {
          const res = await fetch("https://api.tvmaze.com/shows");
          if (!res.ok) {
            throw new Error("could not load the movie");
          }
          return res.json();
          }
      },
      {
        path:"/shows/:id",
        Component:MovieDetail,
        loader: async ({params}) => {
          
          const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
          if (!res.ok) {
            throw new Error("Movie could not found");
          }
          return res.json();
          }
      },
      {
        path:"/movie",
        Component:Movie
      },
       
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
