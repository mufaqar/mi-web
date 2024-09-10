import { AiOutlineBulb } from 'react-icons/ai'
import { BiAperture } from 'react-icons/bi'
import { FiPlay } from 'react-icons/fi'
import { FiLayers } from 'react-icons/fi'
import InnerPages_Banner from '../components/innerPages-banner'
import Service from '../components/service-box'
import { motion, Variant } from 'framer-motion'
import { scaleUp } from "../const/animation";
import PageHead from '../components/pagesmeta'
import Testimonial from '../components/newComponents/testimonial'
import CTA from '../components/newComponents/cta'

export default function Services() {
  return (
    <>
      <PageHead
        title="THIS IS WHAT I LOVE TO DO | Mufaqar Full Stack MERN Developer "
        description="THIS IS WHAT I LOVE TO DO. WHAT I OFFER  To build with Love websites  secure & convert your visitors into customers."
        url="https://www.mufaqar.com/services"
      />
      <InnerPages_Banner subtitle="THIS IS WHAT I LOVE TO DO." title="WHAT I OFFER" />

      <section className="bg-title_color md:pb-[10.5rem] pb-20 relative">
        <div className='container mx-auto px-4 grid md:grid-cols-3 gap-10'>
          <Service icon={<AiOutlineBulb />} title="WEB DESIGNING AND BRANDING" content="We design and give a personality, value and competitive edge to your brand. We strongly believe that if you are not online, you are not in today’s corporate business. We are the creators of good brands with a specialized persona and essence of communication. Get stunning broachers and flyers specially designed for you. Your story of glory speaks through your brand." />
          <Service icon={<FiLayers />} title="REACTJS , NEXTJS AND TAILWINDCSS" content="I build Websites that are fast, easy to manage, secure & convert your visitors into customers using Nextjs and TailwindCss" />
          <Service icon={<BiAperture />} title="WEB DEVELOPMENT" content="Reliable, professional and search engine friendly web solutions are a need of the today’s web. We build on strong methodologies from define design phase to development and deployment. We build on footprints of your unique needs. The result is a stable, adaptable, organized and user-friendly website for both you and customers." />
          <Service icon={<AiOutlineBulb />} title="WORDPRESS SERVICES" content="We design and give a personality, value and competitive edge to your brand. We strongly believe that if you are not online, you are not in today’s corporate business. We are the creators of good brands with a specialized persona and essence of communication. Get stunning broachers and flyers specially designed for you. Your story of glory speaks through your brand." />
          <Service icon={<FiLayers />} title="E-COMMERCE SOLUTIONS" content="Think beyond desktops, laptops and set out for tablets and smartphones. With the growing trend of using the variety of devices to browse web, we are those who make it an optimized experience. In fact responsive designs are the only way to remain viable for decades to come. We are aware of the client needs and provide solutions for multiple grid layouts on all modern browsers and devices." />
          <Service icon={<BiAperture />} title="SEO" content="Content represents you and we know this well. We don’t copy content, we create it and creation are worthy of both time and money. We help you to create structured contents for your site and brand awareness. Through our research-driven SEO techniques, we ensure goal driven organic traffic to your website and that’s what matters most for marketing strategy. More Knocking on Your Virtual business door is our target." />
        </div>
      </section>
      <section className='bg-title_color md:pb-[10.5rem] pb-20 relative'>
        <div className='container mx-auto px-4'>
          <h2 className="md:text-4xl text-2xl font-semibold text-white underline decoration-bs_link_color mb-8">
            Our Process
          </h2>
          <p className="md:text-2xl text-lg font-normal text-white mb-4">
            All companies are different, and all projects have a different brief. That’s why we don’t believe that a single process or methodology can lead to the optimal solution for all projects.
          </p>
          <p className="md:text-2xl text-lg font-normal text-white">
            We take time to understand your business and objectives, and tailor the right process for your particular project. Regardless of whether you need to have developed a complex web application or a smaller landing page, the foundation is always a solid understanding of the challenge and clarification of the purpose. From there, we jointly plan the best way forward and assign responsibilities and timescales.
          </p>
        </div>
      </section>
      <Testimonial />
      <CTA />
    </>
  )
}
