import Banner from "../components/Banner";
import { BsGraphUp } from 'react-icons/bs';
import { BsHourglassSplit } from 'react-icons/bs'
import { FiLayers } from 'react-icons/fi';
import { HiOutlineBeaker } from 'react-icons/hi';
import { FaCalendarAlt } from 'react-icons/fa';
import { BiDevices } from 'react-icons/bi';
import { TbFocusCentered } from 'react-icons/tb';
import { TbGlobe } from 'react-icons/tb';
import Clients from "../components/clients";
import Featured_Service from "../components/featured_services";
import { Brands } from "../components/brands";


export default function Home() {
  return (
    <>
      <Banner className="home-banner bg-zinc-900" />
      <section className="py-24 bg-white">
        <div className="md:w-8/12 w-auto mx-auto">
          <div className="flex flex-col items-center mb-6">
            <h4 className="text-sm tracking-widest font-medium uppercase stroke-black ">WHAT I AM BEST IN</h4>
            <h2 className="after:content-['.'] after:ml-0.5 after:text-customPink md:text-6xl text-5xl leading-7 font-bold tracking-wide mt-5 font-Montserrat">My Experties</h2>
            <hr className="border-b border-customPink w-12 mt-10"></hr>
          </div>
          <div className="text-center py-6 px-4 md:w-[760px] w-auto mx-auto">
            <p className="text-xl text-slate-500 ">I craft and bring to you quality products from start to end , expert in responsive Web designing & development, branding, E-commerce solutions and WordPress Maintenance, Security, Backups & Support</p>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 border-t border-slate-100 bg-white">
        <div className="bg-[url(/images/serviceBg.jpg)] bg-center bg-no-repeat bg-cover md:h-auto h-screen flex items-center">
          <div className="w-full flex flex-col md:px-24 px-4 md:items-start items-center">
            <h4 className="text-sm tracking-widest font-medium uppercase ">THIS IS WHAT WE LOVE TO DO.</h4>
            <h2 className="after:content-['.'] after:ml-0.5 after:text-customPink md:text-5xl text-4xl leading-7 font-bold tracking-wide mt-5">Experties</h2>
            <hr className="border-b border-customPink w-12 mt-10"></hr>
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
      </section>
      <section className="py-16 bg-white">
        <Brands />
      </section>
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="md:w-[1140px] w-auto mx-auto">
          <div className="grid md:grid-cols-4 items-center">
            <div className="flex items-center justify-center">
              <BsGraphUp className="text-5xl text-gray-700 mr-5 stroke-0" />
              <div>
                <h5 className="after:content-['.'] after:ml-0.5 after:text-customPink text-3xl font-medium tracking-wide text-gray-700">1268</h5>
                <span className="text-xs uppercase font-medium tracking-wide text-gray-700">PROJECTS</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HiOutlineBeaker className="text-5xl text-gray-700 mr-5 stroke-0" />
              <div>
                <h5 className="after:content-['.'] after:ml-0.5 after:text-customPink text-3xl font-medium tracking-wide text-gray-700">199060</h5>
                <span className="text-xs uppercase font-medium tracking-wide text-gray-700">Lines of Code</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <BsHourglassSplit className="text-5xl text-gray-700 mr-5 stroke-0" />
              <div>
                <h5 className="after:content-['.'] after:ml-0.5 after:text-customPink text-3xl font-medium tracking-wide text-gray-700">350</h5>
                <span className="text-xs uppercase font-medium tracking-wide text-gray-700">Clients</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FaCalendarAlt className="text-5xl text-gray-700 mr-5 stroke-0" />
              <div>
                <h5 className="after:content-['.'] after:ml-0.5 after:text-customPink text-3xl font-medium tracking-wide text-gray-700">12</h5>
                <span className="text-xs uppercase font-medium tracking-wide text-gray-700">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 border-b border-slate-200  bg-[#0d47a1]">
        <div className="md:w-[1140px] mx-auto flex flex-col items-center justify-center px-4">
          <h3 className="after:content-['.'] after:ml-0.5 after:text-customPink md:text-5xl text-4xl text-white text-center leading-10 font-bold tracking-wide mt-5">I'd Love To Hear About Your Project</h3>
          <p className="text-lg text-white text-center my-5">Looking For A New Web Design (With Development) And/or Corporate Identity?</p>
          <button className="border border-white py-5 px-8 bg-transparent hover:bg-white transition-all duration-500 text-white hover:text-[#0d47a1] font-medium uppercase text-xs ">Work With Me</button>
        </div>
      </section>
    </>
  )
}
