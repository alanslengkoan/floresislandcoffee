import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import About from "./About";
import News from "./News";
import ReadNews from "./ReadNews";
import Contact from "./Contact";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import CoffeeOrigin from "./CoffeeOrigin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Product />,
      },
      {
        path: "shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:slug",
        element: <ReadNews />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "origin",
        element: <CoffeeOrigin />,
      },
    ],
  },
]);

export default router;