import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const Mainlayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
