import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation]);

const MySwiper = ({ children, slides }: { children: any, slides?: number }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={slides}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      pagination={{ clickable: true }}
    >
      {children}
      {/* PAGINATION MARGIN */}
      <div style={{ marginTop: "70px"}}></div>

      
      {/* PREV BUTTON */}
      <div className="swiper-button-prev absolute z-10 top-1/2 left-0 transform -translate-y-1/2" />
      {/* NEXT BUTTON */}
      <div className="swiper-button-next absolute z-10 top-1/2 right-0 transform -translate-y-1/2" />
    </Swiper>
  )
}

MySwiper.defaultProps = {
    slides: "auto",
  };

export default MySwiper

