import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CommingSoon from "../assets/Slider/coming-soon.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  // Duplicate array untuk efek looping yang mulus
  const sliderData = [
    {
      id: 1,
      image: CommingSoon,
    },
    {
      id: 2,
      image: CommingSoon,
    },
    {
      id: 3,
      image: CommingSoon,
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true} // Aktifkan loop
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={1.2}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Jeda saat hover
          }}
          onSlideChange={(swiper) => {
            // Gunakan realIndex untuk looping yang akurat
            setActiveSlide(swiper.realIndex);
          }}
          className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden"
        >
          {/* Gunakan map untuk membuat slides */}
          {sliderData.map((slide, index) => (
            <SwiperSlide key={`${slide.id}-${index}`} className="relative">
              <div
                className="w-full h-full bg-cover bg-center rounded-xl"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom Pagination */}
      <div className="swiper-pagination mt-4 flex justify-center space-x-2"></div>
    </div>
  );
};

export default Slider;
