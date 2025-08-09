import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Services from "../pages/Services";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "services",
        element: <Services/>,
      },
    ],
  },
]);

export default router;
