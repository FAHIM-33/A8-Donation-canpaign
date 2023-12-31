import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donations/Donation';
import Stats from './Pages/Stats/Stats';
import Details from './Pages/Donations/Details';
import ErrorPage from './Pages/ErrorPage';


const route = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params})=> fetch('/data.json')
      },

      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {route}/>
  </React.StrictMode>,
)
