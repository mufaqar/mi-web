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
    <section className='bg-title_color md:pb-[10.5rem] pb-20'>
      <div className='container mx-auto px-4'>
        <h2 className="md:text-4xl text-2xl font-semibold text-white text-center underline decoration-bs_link_color mb-8">
          Clients
        </h2>
        <p className="md:text-2xl text-lg font-normal text-white text-center mb-10">
          Our past clients have been happy and satisfied with our work.
        </p>
        <div className="">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 1500,
            }}
            slidesPerView={5}
            spaceBetween={10}
            navigation={false}
            breakpoints={
              {// when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                }
              }
            }
          >
            <SwiperSlide>
              <figure className="max-w-[12rem] mx-auto grayscale-0 hover:grayscale-0 bg-white"
              >
                <Image src={brand1} alt="Brands Picture" width={250} height={150} />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="max-w-[12rem] mx-auto grayscale-0 hover:grayscale-0 bg-white"
              >
                <Image src={brand2} alt="Brands Picture" width={250} height={150} />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="max-w-[12rem] mx-auto grayscale-0 hover:grayscale-0 bg-white"
              >
                <Image src={brand3} alt="Brands Picture" width={250} height={150} />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="max-w-[12rem] mx-auto grayscale-0 hover:grayscale-0 bg-white"
              >
                <Image src={brand5} alt="Brands Picture" width={250} height={150} />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="max-w-[12rem] mx-auto grayscale-0 hover:grayscale-0 bg-white"
              >
                <Image src={brand6} alt="Brands Picture" width={250} height={150} />
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
