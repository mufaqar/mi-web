import React from 'react';
import Image from 'next/image';
import brand1 from '../public/images/brands/brands1.png';
import brand2 from '../public/images/brands/brands2.png';
import brand3 from '../public/images/brands/brands3.png';
import brand6 from '../public/images/brands/brands6.png';
import brand5 from '../public/images/brands/brands5.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { motion, Variant } from 'framer-motion'
import { fadeUp, scaleUp } from "../const/animation";

export const Brands = () => {



  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}>
      <motion.h2
        variants={fadeUp}
        className="after:content-['.'] after:ml-0.5 after:text-customPink md:text-6xl text-4xl leading-7 font-bold tracking-wide text-center font-Montserrat">
        Clients
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="max-w-2xl mx-auto mt-4 text-lg leading-7 tracking-wide text-center text-gray-400">
        Our past clients have been happy and satisfied with our work.
      </motion.p>
      <div className="">
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
              variants={scaleUp}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand1} alt="Brands Picture" width={250} height={150} />
            </motion.figure>
          </SwiperSlide>
          <SwiperSlide>
            <motion.figure
              variants={scaleUp}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand2} alt="Brands Picture" width={250} height={150} />
            </motion.figure>
          </SwiperSlide>
          <SwiperSlide>
            <motion.figure
              variants={scaleUp}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand3} alt="Brands Picture" width={250} height={150} />
            </motion.figure>
          </SwiperSlide>
          <SwiperSlide>
            <motion.figure
              variants={scaleUp}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand5} alt="Brands Picture" width={250} height={150} />
            </motion.figure>
          </SwiperSlide>
          <SwiperSlide>
            <motion.figure
              variants={scaleUp}
              className="max-w-[12rem] mx-auto grayscale hover:grayscale-0"
            >
              <Image src={brand6} alt="Brands Picture" width={250} height={150} />
            </motion.figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};
