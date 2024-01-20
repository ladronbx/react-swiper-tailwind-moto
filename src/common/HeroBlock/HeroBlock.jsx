import React, { useEffect, useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './HeroBlock.css';

export const HeroBlock = () => {
  const progressBar1 = useRef(null);
  const progressBar2 = useRef(null);
  const progressBar3 = useRef(null);
  const progressContent1 = useRef(null);
  const progressContent2 = useRef(null);
  const progressContent3 = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    const index = s.activeIndex % 3;
    if (index === 0 && progressBar1.current) {
      progressBar1.current.style.width = (1 - progress) * 100 + '%';
      if (s.previousIndex === 2 && progressBar2.current) progressBar2.current.style.width = '0%';
      if (s.previousIndex === 2 && progressBar3.current) progressBar3.current.style.width = '0%';
    } else if (index === 1 && progressBar2.current) {
      progressBar2.current.style.width = (1 - progress) * 100 + '%';
      if (s.previousIndex === 0 && progressBar1.current) progressBar1.current.style.width = '0%';
      if (s.previousIndex === 0 && progressBar3.current) progressBar3.current.style.width = '0%';
    } else if (index === 2 && progressBar3.current) {
      progressBar3.current.style.width = (1 - progress) * 100 + '%';
      if (s.previousIndex === 1 && progressBar1.current) progressBar1.current.style.width = '0%';
      if (s.previousIndex === 1 && progressBar2.current) progressBar2.current.style.width = '0%';
    }
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="relative hero-block-swiper h-[590px] w-full lg:w-[1280px]"

      >
        <SwiperSlide>
          <div>
            <div className='gradient-div h-full w-full'>
              <img className='gradient-div h-full w-full' src='./Mask Group 410.png' alt='Slide 1' />
            </div>
            <div className='absolute top-[177px] left-[79px] w-[463px] h-[185px] mt-[0px]'>
              <span className='w-[134px] h-[19px] text-left font-exo font-bold text-[16px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic cur'> NOVEDADES 2024</span>
              <div className='absolute w-[435px] h-[90px] top-[26px] mt-[7px]'>
                <span className='text-left font-exo font-bold text-[75px] leading-[66px] tracking-normal text-white uppercase opacity-100 italic'> NUEVA E350</span>
              </div>
              <div className='absolute top-[132px] left-[0px] w-[461px] h-[53px]'>
                <span className='w-[461px] h-[53px] text-left font-rubik font-light text-[14px] leading-[18px] tracking-normal text-white opacity-100'> Et repellendus rerum est rerum voluptas et doloremque voluptates. At quia voluptatem ut tempora beatae aut ipsum quae qui rerum debitis eos necessitatibus voluptas ab aspernatur tempora ut dignissimos quod</span>
              </div>
            </div>
            <div className='absolute top-[400px] left-[80px] w-[130px] h-[35px] bg-[#E2E200] flex items-center justify-center z-10 cursor-pointer'>
              <span className='text-left font-exo font-bold text-[16px] leading-[24px] tracking-normal text-black uppercase opacity-100 italic'>DESCÚBRELA</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='gradient-div h-full w-full'>
              <img className='gradient-div h-full w-full' src='./moto-negra.png' alt='Slide 2' />
            </div>
            <div className='absolute top-[177px] left-[79px] w-[900px] h-[185px] mt-[0px]'>
              <span className='w-[134px] h-[19px] text-left font-exo font-bold text-[16px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic'> CITA EN TALLER</span>
              <div className='absolute h-[90px] top-[26px] mt-[7px]'>
                <span className='text-left font-exo font-bold text-[75px] leading-[66px] tracking-normal text-white uppercase opacity-100 italic'> CITA EN TALLER</span>
              </div>
              <div className='absolute top-[132px] left-[0px] w-[461px] h-[53px]'>
                <span className='w-[461px] h-[53px] text-left font-rubik font-light text-[14px] leading-[18px] tracking-normal text-white opacity-100'> Et repellendus rerum est rerum voluptas et doloremque voluptates. At quia voluptatem ut tempora beatae aut ipsum quae qui rerum debitis eos necessitatibus voluptas ab aspernatur tempora ut dignissimos quod</span>
              </div>
            </div>
            <div className='absolute top-[400px] left-[80px] w-[130px] h-[35px] bg-[#00b1e2] flex items-center justify-center z-10 cursor-pointer'>
              <span className='text-left font-exo font-bold text-[16px] leading-[24px] tracking-normal text-black uppercase opacity-100 italic '>Pide tu cita</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='gradient-div h-full w-full'>
              <img className='gradient-div h-full w-full' src='./moto-azul.png' alt='Slide 3' />
            </div>
            <div className='absolute top-[177px] left-[79px] w-[1100px] h-[185px] mt-[0px]'>
              <span className='h-[19px] text-left font-exo font-bold text-[16px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic'> NOVEDADES 2024</span>
              <div className='absolute h-[90px] top-[26px] mt-[7px]'>
                <span className='text-left font-exo font-bold text-[75px] leading-[66px] tracking-normal text-white uppercase opacity-100 italic'> NUEVA ZONTES</span>
              </div>
              <div className='absolute top-[132px] left-[0px] w-[461px] h-[53px]'>
                <span className='w-[461px] h-[53px] text-left font-rubik font-light text-[14px] leading-[18px] tracking-normal text-white opacity-100'> Et repellendus rerum est rerum voluptas et doloremque voluptates. At quia voluptatem ut tempora beatae aut ipsum quae qui rerum debitis eos necessitatibus voluptas ab aspernatur tempora ut dignissimos quod</span>
              </div>
            </div>
            <div className='absolute top-[400px] left-[80px] w-[130px] h-[35px] bg-[#E2E200] flex items-center justify-center z-10 cursor-pointer'>
              <span className='text-left font-exo font-bold text-[16px] leading-[24px] tracking-normal text-black uppercase opacity-100 italic'>DESCÚBRELA</span>
            </div>
          </div>
        </SwiperSlide>

        <div className='absolute top-[488px] left-[81px] w-[93px] h-[19px] flex items-center z-10'>
          <span className='text-left font-exo font-bold text-[16px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic'>NUEVA E350</span>
        </div>
        <div className='absolute top-[488px] left-[282px] w-[117px] h-[19px] flex items-center z-10'>
          <span className='text-left font-exo font-bold text-[16px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic'>cita en taller</span>
        </div>
        <div className='absolute top-[488px] left-[463px] w-[143px] h-[19px] flex items-center z-10'>
          <span className='text-left font-exo font-bold text-[16px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic'>scooter zontes</span>
        </div>

        <div className="autoplay-progress absolute top-[513px] left-[81px] w-[150px] h-[2px] z-20" slot="container-end">
          <div className="w-full h-[2px] bg-[#E2E2E2]">
            <div ref={progressBar1} className="h-[2px] bg-[#FFFFFF]"></div>
          </div>
          <span ref={progressContent1}></span>
        </div>
        <div className="autoplay-progress absolute top-[513px] left-[272px] w-[150px] h-[2px] z-20" slot="container-end">
          <div className="w-full h-[2px] bg-[#E2E2E2]">
            <div ref={progressBar2} className="h-[2px] bg-[#FFFFFF]"></div>
          </div>
          <span ref={progressContent2}></span>
        </div>
        <div className="autoplay-progress absolute top-[513px] left-[463px] w-[150px] h-[2px] z-20" slot="container-end">
          <div className="w-full h-[2px] bg-[#E2E2E2]">
            <div ref={progressBar3} className="h-[2px] bg-[#FFFFFF]"></div>
          </div>
          <span ref={progressContent3}></span>
        </div>
      </Swiper>
    </>
  );
}
