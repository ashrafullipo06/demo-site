import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,   // path="/" এর শর্টকাট
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

export default router;