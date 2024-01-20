import React, { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export const ResponsiveHeroBlockmd = () => {

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
                className="relative hero-block-swiper h-[590px] w-full"
            >
                <SwiperSlide>
                    <div>
                        <div className='gradient-div h-screen w-full'>
                            <img className='h-full w-full object-cover' src='./Mask Group 410.png' alt='Slide 2' />
                        </div>
                        <div className='absolute top-[77px] left-[79px] w-[463px] h-[185px] mt-[0px]'>
                            <span className='w-[134px] h-[19px] text-left font-exo font-bold text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic cur'> NOVEDADES 2024</span>
                            <div className='absolute w-[435px] h-[90px] top-[26px] mt-[7px]'>
                                <span className='text-left font-exo font-bold text-[75px] md:text-[65px] sm:text-[55px] xs:text-[35px] leading-[66px] tracking-normal text-white uppercase opacity-100 italic'> NUEVA E350</span>
                            </div>
                            <div className='absolute top-[100px] left-[0px] xl:w-[461px] lg:w-[400px] md:w-[400px] sm:w-[220px] w-[220px] h-full'>
                                <span className='xl:w-[461px] lg:w-[400px] md:w-[400px] sm:w-[220px] w-[220px] h-full text-left font-rubik font-light text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[18px] tracking-normal text-white opacity-100'> Et repellendus rerum est rerum voluptas et doloremque voluptates. At quia voluptatem ut tempora beatae aut ipsum quae qui rerum debitis eos necessitatibus voluptas ab aspernatur tempora ut dignissimos quod</span>
                            </div>
                        </div>
                        <div className='absolute top-[400px] left-[79px] w-[130px] h-[35px] bg-[#E2E200] flex items-center justify-center z-10 cursor-pointer'>
                            <span className='text-left font-exo font-bold text-[16px]  md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[24px] tracking-normal text-black uppercase opacity-100 italic'>DESCÚBRELA</span>
                        </div>

                        <div className="absolute top-[488px] left-[81px] flex flex-row justify-between items-center">
                            <div className='flex flex-col items-start z-20 mr-[60px]'>
                                <span className='text-left font-exo font-bold text-[16px]  md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic mb-[6px]'>NUEVA E350</span>
                                <div className="autoplay-progress w-[150px] h-[2px] z-20" slot="container-end">
                                    <div className="w-full h-[2px] bg-[#E2E2E2]">
                                        <div ref={progressBar1} className="h-[2px] bg-[#FFFFFF]"></div>
                                    </div>
                                    <span ref={progressContent1}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='gradient-div h-screen w-full'>
                            <img className='h-full w-full object-cover' src='./moto-negra.png' alt='Slide 2' />
                        </div>
                        <div className='absolute top-[77px] left-[79px] w-[900px] h-[185px] mt-[0px]'>
                            <span className='w-[134px] h-[19px] text-left font-exo font-bold text-[16px]  md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic'> CITA EN TALLER</span>
                            <div className='absolute h-[90px] top-[26px] mt-[7px]'>
                                <span className='text-left font-exo font-bold text-[75px] md:text-[65px] sm:text-[55px] xs:text-[35px] leading-[66px] tracking-normal text-white uppercase opacity-100 italic'> CITA EN TALLER</span>
                            </div>
                            <div className='absolute top-[100px] left-[0px] xl:w-[461px] lg:w-[400px] md:w-[400px] sm:w-[220px] w-[220px] h-full'>
                                <span className='xl:w-[461px] lg:w-[400px] md:w-[400px] sm:w-[220px] w-[220px] h-full text-left font-rubik font-light text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[18px] tracking-normal text-white opacity-100'> Et repellendus rerum est rerum voluptas et doloremque voluptates. At quia voluptatem ut tempora beatae aut ipsum quae qui rerum debitis eos necessitatibus voluptas ab aspernatur tempora ut dignissimos quod</span>
                            </div>
                        </div>
                        <div className='absolute top-[400px] left-[79px] w-[130px] h-[35px] bg-[#E2E200] flex items-center justify-center z-10 cursor-pointer'>
                            <span className='text-left font-exo font-bold text-[16px]  md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[24px] tracking-normal text-black uppercase opacity-100 italic '>Pide tu cita</span>
                        </div>

                        <div className="absolute top-[488px] left-[81px] flex flex-row justify-between items-center">
                            <div className='flex flex-col items-start z-10 mr-[60px]'>
                                <span className='text-left font-exo font-bold text-[16px]  md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic mb-[6px]'>cita en taller</span>
                                <div className="autoplay-progress w-[150px] h-[2px] z-20" slot="container-end">
                                    <div className="w-full h-[2px] bg-[#E2E2E2]">
                                        <div ref={progressBar2} className="h-[2px] bg-[#FFFFFF]"></div>
                                    </div>
                                    <span ref={progressContent2}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                    <div className='gradient-div h-screen w-full'>
                            <img className='h-full w-full object-cover' src='./moto-azul.png' alt='Slide 2' />
                        </div>
                        <div className='absolute top-[77px] left-[79px] w-[1100px] h-[185px] mt-[0px]'>
                            <span className='h-[19px] text-left font-exo font-bold text-[16px]  md:text-[14px] sm:text-[12px] xs:text-[12px]  leading-[20px] tracking-normal text-white uppercase opacity-100 italic'> NOVEDADES 2024</span>
                            <div className='absolute h-[90px] top-[26px] mt-[7px]'>
                                <span className='text-left font-exo font-bold text-[75px] md:text-[65px] sm:text-[55px] xs:text-[35px]  leading-[66px] tracking-normal text-white uppercase opacity-100 italic'> NUEVA ZONTES</span>
                            </div>

                            <div className='absolute top-[100px] left-[0px] xl:w-[461px] lg:w-[400px] md:w-[400px] sm:w-[220px] w-[220px] h-full'>
                                <span className='xl:w-[461px] lg:w-[400px] md:w-[400px] sm:w-[220px] w-[220px] h-full text-left font-rubik font-light text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[18px] tracking-normal text-white opacity-100'> Et repellendus rerum est rerum voluptas et doloremque voluptates. At quia voluptatem ut tempora beatae aut ipsum quae qui rerum debitis eos necessitatibus voluptas ab aspernatur tempora ut dignissimos quod</span>
                            </div>
                        </div>
                        <div className='absolute top-[400px] left-[79px] w-[130px] h-[35px] bg-[#E2E200] flex items-center justify-center z-10 cursor-pointer'>
                            <span className='text-left font-exo font-bold text-[16px]  md:text-[14px] sm:text-[12px] xs:text-[12px]  leading-[24px] tracking-normal text-black uppercase opacity-100 italic'>DESCÚBRELA</span>
                        </div>

                        <div className="absolute top-[488px] left-[81px] flex flex-row justify-between items-center">
                            <div className='flex flex-col items-start z-10'>
                                <span className='text-left font-exo font-bold text-[16px]  md:text-[14px] sm:text-[12px] xs:text-[12px] leading-[20px] tracking-normal text-white uppercase opacity-100 italic mb-[6px]'>scooter zontes</span>
                                <div className="autoplay-progress w-[150px] h-[2px] z-20" slot="container-end">
                                    <div className="w-full h-[2px] bg-[#E2E2E2]">
                                        <div ref={progressBar3} className="h-[2px] bg-[#FFFFFF]"></div>
                                    </div>
                                    <span ref={progressContent3}></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}