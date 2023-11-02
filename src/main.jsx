import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {Home, About, OrderSummary, Error, Products, FeaturedProducts, NewProducts} from "./pages/pages.js"


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/order-summary',
        element: <OrderSummary />,
      },
      {
        path: '/products',
        element: <Products />,
        children: [
          {
            path: 'featured',
            element: <FeaturedProducts />
          },
          {
            path: 'new',
            element: <NewProducts />
          },
        ]
      },
    ],
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
