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
         className="h-[176px] lg:h-[255px] xl:h-[336px] w-full relative"
         dir="ltr"
         modules={[Navigation, Pagination, A11y]}
         slidesPerView={1}
         navigation
         pagination={{
            clickable: true,
         }}>
         <SwiperSlide className="relative">
            <div className="bg-slider-1-mobile lg:bg-slider-1-desktop h-full bg-cover" />
            <p
               className="absolute z-20 bold-16 lg:bold-32 xl:bold-40 text-secondary-0 top-[50%] left-[50%]
               -translate-x-[50%] -translate-y-[50%] whitespace-nowrap">
               تجربه غذای سالم و گیاهی به سبک ترخینه
            </p>
         </SwiperSlide>
         <SwiperSlide className="relative">
            <div className="bg-slider-2-mobile lg:bg-slider-2-desktop h-full bg-cover" />
            <p
               className="absolute z-20 bold-16 lg:bold-32 xl:bold-40 text-secondary-0 top-[50%] left-[50%]
               -translate-x-[50%] -translate-y-[50%] whitespace-nowrap">
               !طعم بی‌نظیر طبیعت
            </p>
         </SwiperSlide>
         <SwiperSlide className="relative">
            <div className="bg-slider-3-mobile lg:bg-slider-3-desktop h-full bg-cover" />
            <p
               className="absolute z-20 bold-16 lg:bold-32 xl:bold-40 text-secondary-0 top-[50%] left-[50%]
               -translate-x-[50%] -translate-y-[50%] whitespace-nowrap">
               !لذت غذای سالم و گیاهی را با ترخینه تجربه کنید
            </p>
         </SwiperSlide>
         <Image
            src="/images/Elipse Group.svg"
            width={154}
            height={33}
            className="absolute z-10 left-[50%] -translate-x-[50%] -translate-y-[50%]
            w-[82px] h-[19px] lg:w-[154px] lg:h-[33px] -bottom-[11px] lg:-bottom-[17px]"
            alt="Elipse Group"
         />
      </Swiper>
   );
};

export default Slider;
