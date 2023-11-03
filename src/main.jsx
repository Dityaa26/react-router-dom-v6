import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  // About,
  OrderSummary,
  Error,
  Products,
  FeaturedProducts,
  NewProducts,
  Users,
  UserDetails,
  Admin,
} from "./pages/pages.js";


const LazyAbout = lazy(() => import('./pages/About.jsx'))


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/order-summary",
        element: <OrderSummary />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:userId",
        element: <UserDetails />,
      },
      {
        path: "/users/admin",
        element: <Admin />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "featured",
            element: <FeaturedProducts />,
          },
          {
            path: "new",
            element: <NewProducts />,
          },
          {
            index: true,
            element: <FeaturedProducts />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
);
