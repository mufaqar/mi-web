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
import { Autoplay } from "swiper";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function Banner() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <>
      <section className="relative py-24">
        <div className='container mx-auto flex flex-col items-center space-y-16 p-4'>
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
        <Particles
        className='-z-10 relative'
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          fullscreen="false"
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </section>


    </>
  )
}

