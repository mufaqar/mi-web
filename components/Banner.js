import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineSkype } from 'react-icons/ai';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Autoplay } from "swiper";

export default function Banner() {
  return (
    <>
      <section className="bg-zinc-900 py-24">
        <div className='md:w-[1140px] mx-auto flex flex-col items-center space-y-16 p-4'>
          <h6 className='text-xl text-white font-medium tracking-widest '>Hello, I'm Mufaqar</h6>
          <div className='w-full h-auto'>
            <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2000,
            }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <h1 className='md:text-6xl text-3xl text-white font-normal text-center leading-none tracking-widest mt-5 uppercase'>
                  Stack WordPress Developer
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className='md:text-6xl text-3xl text-white font-normal text-center leading-none tracking-widest mt-5 uppercase'>
                  ReactJs / Nextjs and Tailwindcss Expert
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className='md:text-6xl text-3xl text-white font-normal text-center leading-none tracking-widest mt-5 uppercase'>
                  Specialize in WordPress Maintenance, Security, Backups & Support
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className='md:text-6xl text-3xl text-white font-normal text-center leading-none tracking-widest mt-5 uppercase'>
                  Designer & WordPress Expert
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className='md:text-6xl text-3xl text-white font-normal text-center leading-none tracking-widest mt-5 uppercase'>
                  Woocommerce and Shopfiy Developer
                </h1>
              </SwiperSlide>
            </Swiper>
          </div>
          <ul className='flex space-x-5 mt-5'>
            <li className='bg-zinc-800 hover:bg-customPink p-3 rounded-full transition hover:duration-500'><Link href="#"><FaFacebookF className='text-white' /></Link></li>
            <li className='bg-zinc-800 hover:bg-customPink p-3 rounded-full transition hover:duration-500'><Link href="#"><IoLogoTwitter className='text-white' /></Link></li>
            <li className='bg-zinc-800 hover:bg-customPink p-3 rounded-full transition hover:duration-500'><Link href="#"><FaLinkedinIn className='text-white' /></Link></li>
            <li className='bg-zinc-800 hover:bg-customPink p-3 rounded-full transition hover:duration-500'><Link href="#"><AiOutlineSkype className='text-white' /></Link></li>
          </ul>
        </div>
      </section>

    </>
  )
}

