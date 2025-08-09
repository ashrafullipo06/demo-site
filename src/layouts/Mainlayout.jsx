
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Services from "../pages/Services";



const Mainlayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Navbar />
      <Outlet />
      {/* <Services/> */}
    </div>
  );
};

export default Mainlayout;
