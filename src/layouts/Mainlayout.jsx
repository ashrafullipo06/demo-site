import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1200px] mx-auto px-4">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
