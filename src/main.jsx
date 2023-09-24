import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donations/Donation';
import Stats from './Pages/Stats/Stats';

const route = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>This is Error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/stats",
        element: <Stats></Stats>
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {route}/>
  </React.StrictMode>,
)
