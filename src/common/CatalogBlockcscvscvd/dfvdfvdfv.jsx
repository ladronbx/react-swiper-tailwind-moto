import React from "react";
import { Rectangle2515 } from "../Rectangle2515/Rectangle2515";
import { Rectangle2572 } from "../Rectangle2572/Rectangle2572";
import { Rectangle2573 } from "../Rectangle2573/Rectangle2573";
import { Rectangle2574 } from "../Rectangle2574/Rectangle2574";

import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CatalogBlock = () => {

  return (
    <>
      <div className="relative h-[590px] w-full ml-[80px] mr-[160px]">
        <div className="ml-[160px] mr-[160px] w-full max-w-[1280px] mt-[60px]">
          <h2 className="text-left font-exo font-bold text-[40px] leading-[48px] tracking-normal text-custom-black uppercase opacity-100 italic">Modelos destacados</h2>
          {/* <div className="absolute left-[1020px] w-[180px] h-[35px] bg-[#E2E200] opacity-100 flex justify-center items-center cursor-pointer"></div>
          <span className='absolute left-[1037px] w-[147px] h-[19px] text-left font-exo font-bold text-[16px] leading-[24px] tracking-[0px] text-[#151515] uppercase opacity-100 italic cursor-pointer pt-[5px] pb-[9px]'>VER MÁS MODELOS</span> */}

          <Swiper
            scrollbar={{ draggable: true, snapOnRelease: false, el: '.swiper-scrollbar' }}
            modules={[Scrollbar]}
            className="mySwiper mb-[30px]"
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              724: {
                slidesPerView: 2,
                spaceBetween: '5%',
              },
              768: {
                slidesPerView: 2,
                spaceBetween: '5%',
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: '3%',
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

          <div className="swiper-scrollbar ml-[160px] mr-[280px] mt-[30px]"></div>

        </div>

      </div>
    </>
  );
};