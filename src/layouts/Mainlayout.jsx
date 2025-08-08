import Home from "../pages/Home";
import Navbar from "../components/navbar/Navbar";

const Mainlayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Navbar />
      <Home />
    </div>
  );
};

export default Mainlayout;
