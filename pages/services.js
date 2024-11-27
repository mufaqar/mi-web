import InnerPages_Banner from '../components/innerPages-banner'
import Service from '../components/service-box'
import PageHead from '../components/pagesmeta'
import Testimonial from '../components/newComponents/testimonial'
import CTA from '../components/newComponents/cta'

export default function Services() {
  return (
    <>
      <PageHead
        title=" Professional Web Development, E-commerce, and Design Services "
        description="Expert in WordPress, React.js, e-commerce, SEO, and design services to boost your online presence and drive business growth."
        url="https://www.mufaqar.com/services"
      />
      <InnerPages_Banner subtitle="THIS IS WHAT I LOVE TO DO." title="WHAT I OFFER" />

      <section className="bg-bs_info md:py-[12.5rem] py-20 relative">
        <div className='container mx-auto px-4 grid md:grid-cols-3 gap-10'>
          <Service title="WORDPRESS SERVICES" content="I specialize in creating fast, secure, and scalable WordPress websites tailored to your needs, including custom themes, plugins, and e-commerce solutions." list1="Custom Themes & Plugins" list2="E-commerce Solutions" list3="Maintenance & Support" />
          <Service title="Fullstack React.js Developer" content="I specialize in JavaScript frameworks like React.js, Node.js, and TypeScript to build scalable web apps with Next.js, TailwindCSS, APIs, and headless CMS." list1="Next.js Applications" list2="TailwindCSS Integration" list3="API & Headless CMS Integration" />
          <Service title="PHP Development" content="I specialize in Core PHP and frameworks like CodeIgniter and Laravel to deliver scalable and high-performance web solutions." list1="Custom Web Applications" list2="API Development & Integration" list3="CMS Customization" />
          <Service title="E-COMMERCE SOLUTIONS" content="I provide tailored e-commerce solutions to help you grow your online store using platforms like WooCommerce and Shopify." list1="WooCommerce Development"  list2="Shopify Solutions" list3="Store Management & Integrations"/>
          <Service title="SEO" content="I provide comprehensive SEO solutions to boost your website's visibility and drive organic traffic through on-page and off-page optimization." list1="On-Page SEO" list2="Off-Page SEO & Backlinks" list3="Comprehensive SEO Strategy" />
          <Service title="Graphic Design Services" content="I create visually stunning and impactful designs to elevate your brand's identity and engage your audience." list1="Branding & Logo Design" list2="UI/UX Design" list3="Marketing Materials"/>
       
        </div>
      </section>
      <Testimonial />
      <CTA />
    </>
  )
}
