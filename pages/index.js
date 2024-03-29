import Banner from "../components/Banner";
import { BsGraphUp } from 'react-icons/bs';
import { BsHourglassSplit } from 'react-icons/bs'
import { FiLayers } from 'react-icons/fi';
import { HiOutlineBeaker } from 'react-icons/hi';
import { FaCalendarAlt } from 'react-icons/fa';
import { BiDevices } from 'react-icons/bi';
import { TbFocusCentered } from 'react-icons/tb';
import { TbGlobe } from 'react-icons/tb';
import Featured_Service from "../components/featured_services";
import { Brands } from "../components/brands";
import Head from 'next/head'
import { motion, Variant } from 'framer-motion'
import { fadeUp, scaleUp } from "../const/animation";
import PageHead from "../components/pagesmeta";


export default function Home() {
  return (
    <>
      
      <PageHead title="Experienced Full Stack WordPress and ReactJS Frontend Developer | Mufaqar " description="Full Stack MERN Developer proficient in WordPress, React, NextJs, and Tailwind expert from Lahore , Pakistan." url="https://www.mufaqar.com" />
       
      <Banner className="home-banner bg-zinc-900" />
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-6">
            <motion.h4
              variants={fadeUp}
              className="text-sm tracking-widest font-medium uppercase stroke-black ">
            Experienced Full Stack 
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="after:content-['.'] after:ml-0.5 after:text-customPink md:text-6xl text-4xl leading-7 font-bold tracking-wide mt-5 font-Montserrat">
             MERN Developer | WordPress Expert

            </motion.h2>
            <motion.hr variants={scaleUp} className="border-b border-customPink w-12 mt-10"></motion.hr>
          </div>
          <motion.div
            variants={fadeUp}
            className="text-center py-6 px-4 md:w-[1080px] w-auto mx-auto">
            <p className="text-xl text-slate-500 ">I bring over a decade of expertise in ReactJs, WordPress, and PHP development, adept in frontend technologies like React, Redux, HTML5, CSS3, and proficient in deployment via Heroku, AWS, Firebase, and cPanel. My backend skills encompass Node.js, Express.js, ReactJs, NextJs, GraphQL, and Apollo Client, coupled with expertise in MongoDB, MySQL, and SQL databases. In the WordPress realm, I specialize in custom theme development, WooCommerce, Multi-Vendor setups, and booking systems, utilizing tools such as Elementor, Visual Composer, ACF, and Yoast for optimal performance, troubleshooting, and seamless migrations.</p>
          </motion.div>

          
        </div>
      </motion.section>
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="grid md:grid-cols-2 border-t border-slate-100 bg-white">
        <div className="bg-[url(/images/serviceBg.jpg)] bg-center bg-no-repeat bg-cover md:h-auto h-screen flex items-center">
          <div className="w-full flex flex-col md:px-24 px-4 md:items-start items-center">
            <motion.h4
              variants={fadeUp}
              className="text-sm tracking-widest font-medium uppercase ">
              THIS IS WHAT WE LOVE TO DO.
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="after:content-['.'] after:ml-0.5 after:text-customPink md:text-5xl text-4xl leading-7 font-bold tracking-wide mt-5">
              Experties
            </motion.h2>
            <motion.hr variants={scaleUp} className="border-b border-customPink w-12 mt-10"></motion.hr>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <Featured_Service
            BG_icon={<BiDevices />}
            mai_icon={<BiDevices />}
            title="Wordpress Services"
            content="WordPress Customization Theme Development WordPress Integration Site Maintenance and WordPress Security"
          />
          <Featured_Service
            BG_icon={<FiLayers />}
            mai_icon={<FiLayers />}
            title=" React & Next.js and Tailwindcss"
            content="An experienced frontend developer to build Websites and e-commerce stores over headless CMS (Wordpress)"
          />
          <Featured_Service
            BG_icon={<TbFocusCentered />}
            mai_icon={<TbFocusCentered />}
            title="Web Designing and Branding"
            content="I build websites with passion that build brands."
          />
          <Featured_Service
            BG_icon={<TbGlobe />}
            mai_icon={<TbGlobe />}
            title="E-Commerce Solutions"
            content="I am  experts at Woocommerce/Shopify, the most famous platform that’s trusted by leading brands."
          />
        </div>
      </motion.section>
      <section className="py-16 bg-white">
        <Brands />
      </section>
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="pt-5 pb-16 border-b border-slate-200 bg-white">
        <div className="md:max-w-[1140px] w-auto mx-auto">
          <div className="grid md:grid-cols-4 items-center">
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center">
              <BsGraphUp className="text-5xl text-gray-700 mr-5 stroke-0" />
              <div>
                <h5 className="after:content-['.'] after:ml-0.5 after:text-customPink text-3xl font-medium tracking-wide text-gray-700">1268</h5>
                <span className="text-xs uppercase font-medium tracking-wide text-gray-700">PROJECTS</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center">
              <HiOutlineBeaker className="text-5xl text-gray-700 mr-5 stroke-0" />
              <div>
                <h5 className="after:content-['.'] after:ml-0.5 after:text-customPink text-3xl font-medium tracking-wide text-gray-700">199060</h5>
                <span className="text-xs uppercase font-medium tracking-wide text-gray-700">Lines of Code</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center">
              <BsHourglassSplit className="text-5xl text-gray-700 mr-5 stroke-0" />
              <div>
                <h5 className="after:content-['.'] after:ml-0.5 after:text-customPink text-3xl font-medium tracking-wide text-gray-700">350</h5>
                <span className="text-xs uppercase font-medium tracking-wide text-gray-700">Clients</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center">
              <FaCalendarAlt className="text-5xl text-gray-700 mr-5 stroke-0" />
              <div>
                <h5 className="after:content-['.'] after:ml-0.5 after:text-customPink text-3xl font-medium tracking-wide text-gray-700">12</h5>
                <span className="text-xs uppercase font-medium tracking-wide text-gray-700">Years Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="py-24 border-b border-slate-200  bg-[#0d47a1]">
        <div className="md:max-w-[1140px] mx-auto flex flex-col items-center justify-center px-4">
          <motion.h3
            variants={fadeUp}
            className="after:content-['.'] after:ml-0.5 after:text-customPink md:text-5xl text-3xl text-white text-center leading-10 font-bold tracking-wide mt-5">
            I'd Love To Hear About Your Project
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-lg text-white text-center my-5">
            Looking For A New Web Design (With Development) And/or Corporate Identity?
          </motion.p>
          <motion.button
            variants={fadeUp}
            className="border border-white py-5 px-8 bg-transparent hover:bg-white transition-all duration-500 text-white hover:text-[#0d47a1] font-medium uppercase text-xs ">
            Work With Me
          </motion.button>
        </div>
      </motion.section>
    </>
  )
}
