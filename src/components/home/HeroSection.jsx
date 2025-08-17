import HeroBanner from "../../assets/HeroBanner.png";
// import bgBlob from "../../assets/blob.svg";
import Slider from "../../components/home/Slider";
import { MdDownload } from "react-icons/md";
import Typewriter from "./TypewriterLine";

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ashraful_Islam_CV.pdf";
    link.download = "Ashraful_Islam_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="px-4 py-6 mt-2 bg-[#F6F5F2] rounded-md"
      style={{
        boxShadow:
          "4px 0 6px -1px rgba(0,0,0,0.1), -4px 0 6px -1px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-x-10">
        {/* Left Image Section */}
        <div className="left-img-section h-[250px] sm:h-[300px] md:h-[400px] w-full md:w-[500px]">
          <img
            className="h-full w-full object-contain"
            src={HeroBanner}
            alt="HeroBanner"
          />
        </div>

        {/* Right Side Text */}
        <div className="right-side flex flex-col justify-center gap-3 w-full md:w-[400px] text-center md:text-left">
          <span className="text-pink-500 font-bold text-sm sm:text-base">
            {"<span>"} <span className="text-black">hey, I’m</span>{" "}
            <span className="text-blue-600">"Lipo"</span>
            <span className="text-yellow-400">|</span>
            {"</span>"}
          </span>

          {/* Typewriter */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            <Typewriter speed={45} />
          </div>

          <p className="text-base sm:text-lg">
            <span className="text-pink-500">{"<p>"}</span>With expertise in
            cutting-edge technologies such as{" "}
            <span className="text-[#93df49]">
              NodeJS, React, Angular, and Laravel
            </span>
            ... I deliver web solutions that are both innovative and robust.
            <span className="text-pink-500">{"</p>"}</span>
          </p>

          {/* Slider */}
          <div className="pt-3 sm:pt-5">
            <Slider />
          </div>

          {/* Button */}
          <button
            onClick={handleDownload}
            className="flex justify-center md:justify-start gap-3 items-center hover:bg-blue-200 rounded-2xl text-3xl cursor-pointer text-[#93df49] px-4 py-2 mt-4 w-full md:w-auto"
          >
            <MdDownload />
            <p className="text-base font-normal text-white flex items-center gap-1">
              <span className="text-red-600 font-bold">{`{ `}</span>
              <span className="text-black">Download CV</span>
              <span className="text-red-500 font-bold">{` }`}</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
