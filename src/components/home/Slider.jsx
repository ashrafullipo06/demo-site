import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import htmlIcon from "../../assets/html-icon.png";
import javascriptIcon from "../../assets/java-script.png";
import NodeJsIcon from "../../assets/node-icon.png";
import tailwindIcon from "../../assets/tailwind-icon.png";
import reactIcon from "../../assets/react-icon.png";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./slider.css";

const Slider = () => {
  const image = [htmlIcon, javascriptIcon, NodeJsIcon, tailwindIcon, reactIcon];

  return (
    <div className="cntainer max-w-[300px]">
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        freeMode={true}
        loop={true}
        speed={3000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {image.map((image, index) => (
          <SwiperSlide key={index} style={{ width: "40%", height: 50 }}>
            <img
              src={image}
              alt={`slide${index + 1}`}
              style={{ width: "60%", height: "60%", objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
