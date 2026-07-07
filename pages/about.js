import { Brands } from '../components/brands';
import InnerPages_Banner from '../components/innerPages-banner';
import CTA from '../components/newComponents/cta';
import Testimonial from '../components/newComponents/testimonial';
import PageHead from '../components/pagesmeta';
import Story from '../components/story';

export default function About() {
  return (
    <main className='overflow-x-hidden'>
      <PageHead
        title="About Mufaqar Islam | Full Stack Web Developer | 12+ Years WordPress & React"
        description="Experienced full-stack web developer with 12+ years specializing in WordPress, React, Next.js, PHP, and e-commerce solutions. Delivering tailored digital experiences from Lahore."
        url="https://www.mufaqar.com/about"
      />
    
      <InnerPages_Banner subtitle="Full Stack Developer | WordPress | React | NextJs | Tailwind" title="About Me" />

      <Story />

      <Brands />
      <CTA />
    </main>
  );
}
