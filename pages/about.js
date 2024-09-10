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
        title="About Me | Full Stack MERN Developer | WordPress | React | NextJs | TailwindCSS "
        description="Seasoned ReactJs/WordPress/PHP Developer with over a decade of experience building, launching, and managing complex websites"
        url="https://www.mufaqar.com/about"
      />
      <InnerPages_Banner title="Mufaqar" />

      <Story />

      <Brands />

      <Testimonial />
      <CTA />
    </main>
  );
}
