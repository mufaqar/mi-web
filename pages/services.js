import { AiOutlineBulb } from 'react-icons/ai'
import { BiAperture } from 'react-icons/bi'
import { FiPlay } from 'react-icons/fi'
import { FiLayers } from 'react-icons/fi'
import InnerPages_Banner from '../components/innerPages-banner'
import Service from '../components/service-box'
import { motion, Variant } from 'framer-motion'
import { scaleUp } from "../const/animation";

export default function Services() {
  return (
    <>
      <InnerPages_Banner sub="THIS IS WHAT I LOVE TO DO." title="WHAT I OFFER" />

      <section className='bg-[url(/images/our-team-bg2.jpg)] bg-center bg-no-repeat bg-cover py-24 px-5'>
        <div className='md:w-[1170px] mx-auto grid md:grid-cols-3 gap-9'>
          <Service icon={<AiOutlineBulb />} title="WEB DESIGNING AND BRANDING" content="We design and give a personality, value and competitive edge to your brand. We strongly believe that if you are not online, you are not in today’s corporate business. We are the creators of good brands with a specialized persona and essence of communication. Get stunning broachers and flyers specially designed for you. Your story of glory speaks through your brand." />
          <Service icon={<FiLayers />} title="REACTJS , NEXTJS AND TAILWINDCSS" content="I build Websites that are fast, easy to manage, secure & convert your visitors into customers using Nextjs and TailwindCss" />
          <Service icon={<BiAperture />} title="WEB DEVELOPMENT" content="Reliable, professional and search engine friendly web solutions are a need of the today’s web. We build on strong methodologies from define design phase to development and deployment. We build on footprints of your unique needs. The result is a stable, adaptable, organized and user-friendly website for both you and customers." />
          <Service icon={<AiOutlineBulb />} title="WORDPRESS SERVICES" content="We design and give a personality, value and competitive edge to your brand. We strongly believe that if you are not online, you are not in today’s corporate business. We are the creators of good brands with a specialized persona and essence of communication. Get stunning broachers and flyers specially designed for you. Your story of glory speaks through your brand." />
          <Service icon={<FiLayers />} title="E-COMMERCE SOLUTIONS" content="Think beyond desktops, laptops and set out for tablets and smartphones. With the growing trend of using the variety of devices to browse web, we are those who make it an optimized experience. In fact responsive designs are the only way to remain viable for decades to come. We are aware of the client needs and provide solutions for multiple grid layouts on all modern browsers and devices." />
          <Service icon={<BiAperture />} title="SEO" content="Content represents you and we know this well. We don’t copy content, we create it and creation are worthy of both time and money. We help you to create structured contents for your site and brand awareness. Through our research-driven SEO techniques, we ensure goal driven organic traffic to your website and that’s what matters most for marketing strategy. More Knocking on Your Virtual business door is our target." />
        </div>
      </section>
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className='py-24 px-5'>
        <motion.div
          variants={scaleUp}
          className='md:w-[1170px] mx-auto flex  md:flex-row flex-col items-center p-10 bg-gray-200'>
          <h3 className='md:text-4xl text-3xl leading-10 font-bold tracking-wide md:w-3/4 w-full'>I'd Love To Hear About Your Project</h3>
          <button className='md:w-1/4 w-full flex items-center space-x-5'>
            <span className='bg-gradient-to-r from-[#0d47a1] to-[#bd71ff] w-12 h-12 flex items-center justify-center 
            text-white rounded-full animate-videoIcon'><FiPlay /></span>
            <span className='text-base font-medium tracking-widest'>START YOUR PROJECT</span></button>
        </motion.div>
      </motion.section>
    </>
  )
}
