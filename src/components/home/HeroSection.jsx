import HeroBanner from "../../assets/HeroBanner.png";
// import bgBlob from "../../assets/blob.svg";
import Slider from "../../components/home/Slider";
import { MdDownload } from "react-icons/md";
import Typewriter from "./TypewriterLine";

const HeroSection = () => {
  return (
    <div
      className="h-[600px] px-6 pb-6 pt-6 mt-2 bg-[#F6F5F2] rounded-md"
      style={{
        boxShadow:
          "4px 0 6px -1px rgba(0,0,0,0.1), -4px 0 6px -1px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-10">
        <div className="left-img-section h-[400px] w-auto md:w-[500px]">
          <img
            className="h-full w-full object-contain"
            src={HeroBanner}
            alt="HeroBanner"
          />
        </div>
        <div className="right-side flex flex-col justify-center gap-3 w-full md:w-[400px]">
          <span className="text-pink-500 font-bold">
            {"<span>"} <span className="text-black">hey, I’m</span>{" "}
            <span className="text-blue-600">"Lipo"</span>
            <span className="text-yellow-400">|</span>
            {"</span>"}
          </span>

          {/* Typewriter start here */}
          <div className="text-4xl font-extrabold">
            <Typewriter speed={45} />
          </div>
          {/* Typewriter end here  */}

          <p className="text-[20px]">
            <span className="text-pink-500">{"<p>"}</span>With expertise in
            cutting-edge technologies such as{" "}
            <span className="text-[#93df49]">
              NodeJS, React, Angular, and Laravel
            </span>
            ... I deliver web solutions that are both innovative and robust.
            <span className="text-pink-500">{"</p>"}</span>

            {/* slider component start here */}
            <div className="pt-5">
              <Slider />
            </div>
            {/* slider component end here */}
          </p>
          <div className="flex gap-3 items-center">
            <button className="text-4xl text-[#93df49]">
              <MdDownload />
            </button>
            <p>
              <span className="text-red-600 font-bold">{"{ "}</span>
              <span>Download CV</span>
              <span className="text-red-500 font-bold">{" }"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
