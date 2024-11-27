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
        title=" About Me - Experienced Full-Stack Web Developer | Mufaqar Islam "
        description="Experienced full-stack developer specializing in WordPress, React, and e-commerce solutions. Delivering tailored web development for 12+ years."
        url="https://www.mufaqar.com/about"
      />
    
      <InnerPages_Banner subtitle="Full Stack Developer | WordPress | React | NextJs | Tailwind" title="About Me" />

      <Story />

      <Brands />
      <CTA />
    </main>
  );
}
