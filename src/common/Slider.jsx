"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
   return (
      <Swiper
         className="h-[176px] xl:h-[336px] w-full relative"
         dir="ltr"
         modules={[Navigation, Pagination, A11y]}
         slidesPerView={1}
         navigation
         pagination={{
            clickable: true,
         }}>
         <SwiperSlide>
            <div className="bg-slider-1-mobile xl:bg-slider-1-desktop h-full bg-cover" />
         </SwiperSlide>
         <SwiperSlide>
            <div className="bg-slider-2-mobile xl:bg-slider-2-desktop h-full bg-cover" />
         </SwiperSlide>
         <SwiperSlide>
            <div className="bg-slider-3-mobile xl:bg-slider-3-desktop h-full bg-cover" />
         </SwiperSlide>
         <Image
            src="/images/Elipse Group.svg"
            width={154}
            height={33}
            className="absolute z-10 left-[50%] -translate-x-[50%] -translate-y-[50%]
            w-[82px] h-[19px] xl:w-[154px] xl:h-[33px] -bottom-[11px] xl:-bottom-[17px]"
            alt="Elipse Group"
         />
      </Swiper>
   );
};

export default Slider;
