import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import React from "react";

const MySwiperDetails = ({
  children,
  slides,
}: {
  children: any;
  slides?: number;
}) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, EffectFade,Pagination]}
        navigation
        speed={800}
        slidesPerView={slides}
        loop
        pagination={{ clickable: true }}
        className=" h-[300px] w-full md:h-full"
      >
        {children}
        {/* PAGINATION MARGIN */}
        <div style={{ marginTop: "0px" }}></div>
      </Swiper>
    </div>
  );
};

export default MySwiperDetails;
