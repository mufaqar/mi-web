import React from 'react';
import Image from 'next/image';
import brand1 from '../public/images/brands/brands1.png';
import brand2 from '../public/images/brands/brands2.png';
import brand3 from '../public/images/brands/brands3.png';
import brand6 from '../public/images/brands/brands6.png';
import brand5 from '../public/images/brands/brands5.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';
import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export const Brands = () => {
  const [ref, inView] = useInView();
  const animationOpacity = useAnimation();

  useEffect(() => {
    if (inView) {
      animationOpacity.start({
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      });
    } else {
      animationOpacity.start({
        opacity: 0,
        scale: 0.8,
      });
    }
  }, [inView]);

  return (
    <div>
      <h2 className="after:content-['.'] after:ml-0.5 after:text-customPink md:text-6xl text-4xl leading-7 font-bold tracking-wide text-center font-Montserrat">
        Clients
      </h2>
      <p className="max-w-2xl mx-auto mt-4 text-lg leading-7 tracking-wide text-center text-gray-400">
        Our past clients have been happy and satisfied with our work.
      </p>
      <div ref={ref} className="">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          slidesPerView={5}
          spaceBetween={10}
          navigation={false}
        >
          <SwiperSlide>
            <motion.figure
              animate={animationOpacity}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand1} alt="Brands Picture" />
            </motion.figure>
          </SwiperSlide>
          <SwiperSlide>
            <motion.figure
              animate={animationOpacity}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand2} alt="Brands Picture" />
            </motion.figure>
          </SwiperSlide>
          <SwiperSlide>
            <motion.figure
              animate={animationOpacity}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand3} alt="Brands Picture" />
            </motion.figure>
          </SwiperSlide>
          <SwiperSlide>
            <motion.figure
              animate={animationOpacity}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand5} alt="Brands Picture" />
            </motion.figure>
          </SwiperSlide>
          <SwiperSlide>
            <motion.figure
              animate={animationOpacity}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand6} alt="Brands Picture" />
            </motion.figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
