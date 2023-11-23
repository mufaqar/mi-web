import { Brands } from '../components/brands';
import InnerPages_Banner from '../components/innerPages-banner';
import PageHead from '../components/pagesmeta';
import Story from '../components/story';
import Testimonial from '../components/testimonial';

export default function About() {
  return (
    <>
      <PageHead
        title="About Me | Full Stack MERN Developer | WordPress | React | NextJs | TailwindCSS "
        description="Seasoned ReactJs/WordPress/PHP Developer with over a decade of experience building, launching, and managing complex websites"
        url="https://www.mufaqar.com/about"
      />
      <InnerPages_Banner title="Mufaqar" />

      <Story />

      <Brands />

      <section className="py-16 px-4">
        <Testimonial />
      </section>
    </>
  );
}
