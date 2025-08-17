import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";


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
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/contact",
        element:<Contact/>
      },
    ],
  },
]);

export default router;
