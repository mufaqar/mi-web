import Image from 'next/image';
import React from 'react';
import StoryBgOne from '../public/images/StoryBgOne.svg';
import StoryBgTwo from '../public/images/StoryBgTwo.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';
import { useEffect } from 'react';

function Story() {
  const [ref, inView] = useInView();
  const animation = useAnimation();
  const animationOpacity = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
      });
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
      animation.start({
        opacity: 0,
      });
      animationOpacity.start({
        opacity: 0,
        scale: 0.8,
      });
    }
  }, [inView]);

  return (
    <>
      <section className="container grid p-4 pb-32 mx-auto mt-16 mb-8 md:grid-cols-2 story md:p-0 md:pb-32">
        <div className="relative grid bg-white border border-gray-300 stories_wrapper rounded-xl md:grid-cols-2">
          <div className="border-r-[1px] border-gray-300">
            <motion.h2
              className="text-center text-green-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]"
              animate={animationOpacity}
            >
              200+
            </motion.h2>
            <motion.h6
              className="mt-2 text-center h3"
              animate={animationOpacity}
            >
              Clients Worldwide
            </motion.h6>
          </div>
          <div>
            <motion.h2
              className="text-center text-blue-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]"
              animate={animationOpacity}
            >
              10+
            </motion.h2>
            <motion.h6
              className="mt-2 text-center h3"
              animate={animationOpacity}
            >
              Team Members
            </motion.h6>
          </div>
          <div className="border-t-[1px] border-r-[1px] border-gray-300">
            <motion.h2
              className="text-center text-yellow-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]"
              animate={animationOpacity}
            >
              95+
            </motion.h2>
            <motion.h6
              className="mt-2 text-center h3"
              animate={animationOpacity}
            >
              Client Retention
            </motion.h6>
          </div>
          <div ref={ref} className="border-t-[1px] border-gray-300">
            <motion.h2
              className="text-center text-orange-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]"
              animate={animationOpacity}
            >
              13<sub className="text-2xl">Years</sub>
            </motion.h2>
            <motion.h6
              className="mt-2 text-center h3"
              animate={animationOpacity}
            >
              In Business
            </motion.h6>
          </div>
          <div className="border-t-[1px] border-r-[1px] border-gray-300">
            <motion.h2
              className="text-center text-fuchsia-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]"
              animate={animationOpacity}
            >
              860+
            </motion.h2>
            <motion.h6
              className="mt-2 text-center h3"
              animate={animationOpacity}
            >
              Projects Completed
            </motion.h6>
          </div>
          <div className="border-t-[1px] border-gray-300">
            <motion.h2
              className="text-center text-cyan-500 text-3xl font-extrabold leading-[42px] md:text-6xl md:leading-[70px]"
              animate={animationOpacity}
            >
              24/7
            </motion.h2>
            <motion.h6
              className="mt-2 text-center h3"
              animate={animationOpacity}
            >
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
          <motion.h6 className="text-orange-400 h3" animate={animationOpacity}>
            Our Story
          </motion.h6>
          <motion.h2
            className="mt-2 text-3xl md:text-4xl font-bold text-gray-800 leading-[45px]"
            animate={animation}
          >
            A Trusted Team of Software Developers, Trail Blazers in Innovative
            Technology!
          </motion.h2>
          <p className="mt-4 text-base leading-7 tracking-wide text-gray-400">
            Softs Generations is providing IT services to all its potential
            clients worldwide. We have 100 potential clients that include
            established companies, as well as start-ups. We have clients that
            love to ask repeated orders after their first order.{' '}
          </p>
          <p className="mt-4 text-base leading-7 tracking-wide text-gray-400">
            We have a team of experienced developers and designers that can
            fulfill all your Website development needs. We are proud of
            ourselves because our clients refer us to other people because they
            know that we are the leading solution provider and can render the
            best and simple IT solution to your problems. With our 15-year
            experience, we are offering quality assurance, on time delivery and
            commitment to your projects.
          </p>{' '}
          <p className="mt-4 text-base leading-7 tracking-wide text-gray-400">
            {' '}
            We have experienced developers, analysts, database experts and
            management staff. We believe that flexibility, commitment and
            agility are the keys to giving creative and innovative technology to
            the world.{' '}
          </p>
          <motion.button
            animate={animationOpacity}
            className="border border-black py-5 px-8 bg-transparent hover:bg-black text-black hover:text-white uppercase text-xs mt-5"
          >
            Load More
          </motion.button>
        </div>
      </section>
    </>
  );
}

export default Story;
