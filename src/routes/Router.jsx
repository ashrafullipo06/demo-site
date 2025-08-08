import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
  },
]);

export default router;