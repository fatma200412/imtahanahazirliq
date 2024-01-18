import Add from "../pages/add";
import Basket from "../pages/basket";
import Details from "../pages/details/idex";
import Home from "../pages/home";
import Root from "../pages/root";

export const routers = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/add:id",
        element: <Details />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
];
