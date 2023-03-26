import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./layouts/Root";
import Error_404 from "./pages/404";
import Account from "./pages/Account";

import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <Error_404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
