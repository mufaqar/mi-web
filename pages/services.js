import InnerPages_Banner from '../components/innerPages-banner'
import Service from '../components/service-box'
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

      <section className="bg-bs_info md:py-[12.5rem] py-20 relative">
        <div className='container mx-auto px-4 grid md:grid-cols-3 gap-10'>
          <Service title="WEB DESIGNING AND BRANDING" content="We design and give a personality, value and competitive edge to your brand. We strongly believe that if you are not online, you are not in today’s corporate business." />
          <Service title="REACTJS , NEXTJS AND TAILWINDCSS" content="I build Websites that are fast, easy to manage, secure & convert your visitors into customers using Nextjs and TailwindCss" />
          <Service title="WEB DEVELOPMENT" content="Reliable, professional and search engine friendly web solutions are a need of the today’s web. We build on strong methodologies." />
          <Service title="WORDPRESS SERVICES" content="We design and give a personality, value and competitive edge to your brand. We strongly believe that if you are not online, you are not in today’s corporate business." />
          <Service title="E-COMMERCE SOLUTIONS" content="Think beyond desktops, laptops and set out for tablets and smartphones. With the growing trend of using the variety of devices to browse web, we are those who make it an optimized." />
          <Service title="SEO" content="Content represents you and we know this well. We don’t copy content, we create it and creation are worthy of both time and money." />
        </div>
      </section>
      <Testimonial />
      <CTA />
    </>
  )
}
