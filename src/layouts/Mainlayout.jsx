import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home";
import Footer from "../components/footer/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1200px] mx-auto px-4">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Mainlayout;
