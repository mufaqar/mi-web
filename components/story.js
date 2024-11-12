import Image from 'next/image';
import React from 'react';
import StoryBgOne from '../public/images/StoryBgOne.svg';
import StoryBgTwo from '../public/images/StoryBgTwo.svg';
import { motion, Variant } from 'framer-motion'
import { fadeUp } from "../const/animation";

function Story() {
  return (
    <>
      <section className='bg-title_color'>
        <div className="container grid p-4 md:py-[12.5rem] py-20 mx-auto md:grid-cols-2 story relative z-10">
          <div className="relative grid bg-white border border-gray-300 stories_wrapper rounded-xl md:grid-cols-2">
            <div className="border-r-[1px] border-gray-300">
              <h2 className="text-center text-green-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                200+
              </h2>
              <h6 className="mt-2 text-center h3">
                Clients Worldwide
              </h6>
            </div>
            <div>
              <h2 className="text-center text-blue-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                10M+
              </h2>
              <h6 className="mt-2 text-center h3">
                Lines of Code
              </h6>
            </div>
            <div className="border-t-[1px] border-r-[1px] border-gray-300">
              <h2 className="text-center text-yellow-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                95+
              </h2>
              <h6 className="mt-2 text-center h3">
                Client Retention
              </h6>
            </div>
            <div className="border-t-[1px] border-gray-300">
              <h2 className="text-center text-orange-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                13<sub className="text-2xl">Years</sub>
              </h2>
              <h6 className="mt-2 text-center h3">
                In Business
              </h6>
            </div>
            <div className="border-t-[1px] border-r-[1px] border-gray-300">
              <h2 className="text-center text-fuchsia-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                860+
              </h2>
              <h6 className="mt-2 text-center h3">
                Projects Completed
              </h6>
            </div>
            <div className="border-t-[1px] border-gray-300 relative z-[2]">
              <h2 className="text-center text-cyan-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
                24/7
              </h2>
              <h6 className="mt-2 text-center h3">
                IT Support
              </h6>
            </div>
            <figure className="absolute bottom-4 z-[-1] -left-20">
              <Image src={StoryBgOne} alt="Bg-1"></Image>
            </figure>
            <figure className="absolute lg:-right-12 z-[-1] -bottom-16">
              <Image src={StoryBgTwo} alt="Bg-1" className=""></Image>
            </figure>
          </div>
          <div className="mt-16 md:pl-20 md:mt-0">
            <h6 className="text-bs_link_color h3" >
              Our Story
            </h6>
            <h2 className="md:text-4xl text-2xl font-semibold text-white underline decoration-bs_link_color mb-8">
              Full Stack MERN Developer | WordPress | React | NextJs | TailwindCSS
            </h2>
            <p className="md:text-2xl text-lg font-normal text-white mb-4">
              Seasoned ReactJs/WordPress/PHP Developer with over a decade of
              experience building, launching, and managing complex websites also
              specialize in all things "MERN".
            </p>
            <p className="md:text-2xl text-lg font-normal text-white mb-4">
              Skills Set: ✅ Frontend: React, Redux, HTML5, JavaScript ES6+, CSS3,
              Sass, Bootstrap, Tailwind CSS, MUI ✅ Deployment: Heroku, AWS,
              Firebase, cPanel ✅ Backend: Node.js, Express.js, ReactJs, NextJs,
              GraphQL , Apollo Client ✅ Database: MongoDB, MySQL, SQL
            </p>{' '}
            <p className="md:text-2xl text-lg font-normal text-white mb-4">
              WordPress Experties : ✅ Custom Theme Development ( XD/Figma/ to
              WordPress ) ✅ WooCommerce, Multi-Vendor, Booking System. ✅
              Elementor, Visual Composer, ACF, Yoast ✅ WordPress speed &
              performance optimization, troubleshooting issues & fixes. ✅ Backup
              & Migration to a different hosting
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Story;
