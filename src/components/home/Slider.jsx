import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import htmlIcon from "../../assets/html-icon.png";
import javascriptIcon from "../../assets/java-script.png";
import NodeJsIcon from "../../assets/node-icon.png";
import tailwindIcon from "../../assets/tailwind-icon.png";
import reactIcon from "../../assets/react-icon.png";

import { Pagination, Navigation } from "swiper/modules";
import "./slider.css";

const Slider = () => {
  const images = [
    htmlIcon,
    javascriptIcon,
    NodeJsIcon,
    tailwindIcon,
    reactIcon,
  ];

  // Duplicate images to create seamless loop effect
  const duplicatedImages = [...images, ...images];

  return (
    <div className="container max-w-[300px] mx-auto md:mx-0 overflow-hidden">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        freeModeMomentum={false}
        loop={false}  // loop off because we handle looping manually with duplicated data
        speed={5000}  // speed for CSS animation effect (not used here directly)
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper continuousSwiper"
        allowTouchMove={false}  // disable user drag for smooth continuous scroll
      >
        {duplicatedImages.map((img, index) => (
          <SwiperSlide
            key={index}
            style={{ width: 60, height: 50 }}
            className="flex justify-center items-center"
          >
            <img
              src={img}
              alt={`slide${index + 1}`}
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
