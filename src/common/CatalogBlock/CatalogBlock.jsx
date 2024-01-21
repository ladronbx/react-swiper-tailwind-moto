import React from "react";
import { Rectangle2515 } from "../Rectangle2515/Rectangle2515";
import { Rectangle2572 } from "../Rectangle2572/Rectangle2572";
import { Rectangle2573 } from "../Rectangle2573/Rectangle2573";
import { Rectangle2574 } from "../Rectangle2574/Rectangle2574";

import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CatalogBlock.css';

export const CatalogBlock = () => {

  return (
    <>
      <div className="relative w-full max-w-[1120px] mt-[60px] flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-left font-exo font-bold text-[40px] md:text-[35px] sm:text-[32px] xs:text-[28px] leading-[48px] tracking-normal text-custom-black uppercase opacity-100 italic">Modelos destacados</h2>
        <div className="w-[180px] md:w-[160px] sm:w-[160px] xs:w-[120px] h-[35px] bg-[#E2E200] flex justify-center text-center ver-mas-modelos md:mt-0 mt-4 mb-[30px] md:mb-[30px]">
          <span className='h-[35px] first-line:text-left font-exo font-bold text-[16px] md:text-[16px] sm:text-[14px] xs:text-[12px] leading-[24px] tracking-[0px] text-[#151515] uppercase opacity-100 italic cursor-pointer pt-[5px] pb-[9px]'>VER MÁS MODELOS</span>
        </div>
      </div>

      <div className="relative h-[590px] w-full max-w-[1280px] cursor-pointer overflow-hidden pl-[80px] pr-[80px] container-main-catalog">
        <Swiper
          scrollbar={{ draggable: true, snapOnRelease: false, el: '.swiper-scrollbar' }}
          modules={[Scrollbar]}
          className="mySwiper"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            695: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide><Rectangle2515 /></SwiperSlide>
          <SwiperSlide><Rectangle2572 /></SwiperSlide>
          <SwiperSlide><Rectangle2573 /></SwiperSlide>
          <SwiperSlide><Rectangle2574 /></SwiperSlide>

          {/* Para poder observar el slider repito los componentes */}
          <SwiperSlide><Rectangle2515 /></SwiperSlide>
          <SwiperSlide><Rectangle2572 /></SwiperSlide>
          <SwiperSlide><Rectangle2573 /></SwiperSlide>
          <SwiperSlide><Rectangle2574 /></SwiperSlide>
          <SwiperSlide><Rectangle2515 /></SwiperSlide>
          <SwiperSlide><Rectangle2572 /></SwiperSlide>
          <SwiperSlide><Rectangle2573 /></SwiperSlide>
          <SwiperSlide><Rectangle2574 /></SwiperSlide>
          <SwiperSlide><Rectangle2515 /></SwiperSlide>
          <SwiperSlide><Rectangle2572 /></SwiperSlide>
          <SwiperSlide><Rectangle2573 /></SwiperSlide>
          <SwiperSlide><Rectangle2574 /></SwiperSlide>
          <SwiperSlide><Rectangle2515 /></SwiperSlide>
          <SwiperSlide><Rectangle2572 /></SwiperSlide>
          <SwiperSlide><Rectangle2573 /></SwiperSlide>
          <SwiperSlide><Rectangle2574 /></SwiperSlide>
          <SwiperSlide><Rectangle2515 /></SwiperSlide>
        </Swiper>

        <div className="swiper-scrollbar"></div>

      </div>
    </>
  );
};