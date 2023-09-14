import Image from 'next/image';
import React from 'react';
import StoryBgOne from '../public/images/StoryBgOne.svg';
import StoryBgTwo from '../public/images/StoryBgTwo.svg';
import { motion, Variant } from 'framer-motion'
import { fadeUp } from "../const/animation";

function Story() {
  return (
    <>
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="container grid p-4 pb-32 mx-auto mt-16 mb-8 md:grid-cols-2 story md:p-0 md:pb-32">
        <div className="relative grid bg-white border border-gray-300 stories_wrapper rounded-xl md:grid-cols-2">
          <div className="border-r-[1px] border-gray-300">
            <motion.h2
              variants={fadeUp}
              className="text-center text-green-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
              200+
            </motion.h2>
            <motion.h6
              variants={fadeUp}
              className="mt-2 text-center h3">
              Clients Worldwide
            </motion.h6>
          </div>
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-center text-blue-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
              10M+
            </motion.h2>
            <motion.h6
              variants={fadeUp}
              className="mt-2 text-center h3">
              Line of Code
            </motion.h6>
          </div>
          <div className="border-t-[1px] border-r-[1px] border-gray-300">
            <motion.h2
              variants={fadeUp}
              className="text-center text-yellow-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
              95+
            </motion.h2>
            <motion.h6
              variants={fadeUp}
              className="mt-2 text-center h3">
              Client Retention
            </motion.h6>
          </div>
          <div className="border-t-[1px] border-gray-300">
            <motion.h2
              variants={fadeUp}
              className="text-center text-orange-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
              13<sub className="text-2xl">Years</sub>
            </motion.h2>
            <motion.h6
              variants={fadeUp}
              className="mt-2 text-center h3">
              In Business
            </motion.h6>
          </div>
          <div className="border-t-[1px] border-r-[1px] border-gray-300">
            <motion.h2
              variants={fadeUp}
              className="text-center text-fuchsia-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
              860+
            </motion.h2>
            <motion.h6
              variants={fadeUp}
              className="mt-2 text-center h3">
              Projects Completed
            </motion.h6>
          </div>
          <div className="border-t-[1px] border-gray-300">
            <motion.h2
              variants={fadeUp}
              className="text-center text-cyan-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]">
              24/7
            </motion.h2>
            <motion.h6
              variants={fadeUp}
              className="mt-2 text-center h3">
              IT Support
            </motion.h6>
          </div>
          <figure className="absolute bottom-4 -z-10 -left-20">
            <Image src={StoryBgOne} alt="Bg-1"></Image>
          </figure>
          <figure className="absolute lg:-right-12 -z-10 -bottom-16">
            <Image src={StoryBgTwo} alt="Bg-1" className=""></Image>
          </figure>
        </div>
        <div className="mt-16 md:pl-20 md:mt-0">
          <motion.h6
            variants={fadeUp} className="text-orange-400 h3" >
            Our Story
          </motion.h6>
          <motion.h2
            variants={fadeUp}
            className="mt-2 text-3xl md:text-4xl font-bold text-gray-800 leading-[45px]">
            Full Stack MERN Developer | WordPress | React | NextJs | TailwindCSS
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-7 tracking-wide text-gray-400">
            Seasoned ReactJs/WordPress/PHP Developer with over a decade of
            experience building, launching, and managing complex websites also
            specialize in all things "MERN".
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-7 tracking-wide text-gray-400">
            Skills Set: ✅ Frontend: React, Redux, HTML5, JavaScript ES6+, CSS3,
            Sass, Bootstrap, Tailwind CSS, MUI ✅ Deployment: Heroku, AWS,
            Firebase, cPanel ✅ Backend: Node.js, Express.js, ReactJs, NextJs,
            GraphQL , Apollo Client ✅ Database: MongoDB, MySQL, SQL
          </motion.p>{' '}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-7 tracking-wide text-gray-400">
            WordPress Experties : ✅ Custom Theme Development ( XD/Figma/ to
            WordPress ) ✅ WooCommerce, Multi-Vendor, Booking System. ✅
            Elementor, Visual Composer, ACF, Yoast ✅ WordPress speed &
            performance optimization, troubleshooting issues & fixes. ✅ Backup
            & Migration to a different hosting
          </motion.p>
        </div>
      </motion.section>
    </>
  );
}

export default Story;
