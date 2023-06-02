import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import {
  BrandVariants,
  createDarkTheme,
  createLightTheme,
  FluentProvider,
  teamsLightTheme,
  Theme,
} from "@fluentui/react-components";
import "./index.css";
import Root from "./layouts/Root";

import Error_404 from "./pages/404";
import About from "./pages/About";
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
        path: "about",
        element: <About />,
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

const amenaTheme: BrandVariants = {
  10: "#030302",
  20: "#1A1814",
  30: "#2B2820",
  40: "#383329",
  50: "#453F32",
  60: "#534C3B",
  70: "#615944",
  80: "#6F664E",
  90: "#7E7358",
  100: "#8D8162",
  110: "#9C8F6C",
  120: "#AC9E76",
  130: "#BCAC81",
  140: "#CCBB8B",
  150: "#DDCA96",
  160: "#EDD9A1",
};

const lightTheme: Theme = {
  ...createLightTheme(amenaTheme),
};

const darkTheme: Theme = {
  ...createDarkTheme(amenaTheme),
};

darkTheme.colorBrandForeground1 = amenaTheme[110];
darkTheme.colorBrandForeground2 = amenaTheme[120];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FluentProvider theme={lightTheme}>
    <RouterProvider router={router} />
  </FluentProvider>
);
