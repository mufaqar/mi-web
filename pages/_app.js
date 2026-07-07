import Footer from '../components/newComponents/footer'
import Header from '../components/newComponents/header'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mufaqar Islam",
          "url": "https://www.mufaqar.com",
          "image": "https://www.mufaqar.com/images/og-image.svg",
          "jobTitle": "Full Stack Web Developer",
          "telephone": "+92 302-6006-280",
          "email": "info@mufaqar.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "134 B Ahmed Housing Multan Lahore",
            "addressCountry": "PK"
          },
          "sameAs": [
            "https://www.facebook.com/mufaqar",
            "https://www.linkedin.com/in/mufaqar",
            "https://twitter.com/mufaqar",
            "https://github.com/mufaqar"
          ],
          "knowsAbout": ["WordPress", "React", "Next.js", "PHP", "TailwindCSS", "E-commerce", "Web Development"]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Mufaqar Islam - Full Stack Web Developer",
          "url": "https://www.mufaqar.com",
          "image": "https://www.mufaqar.com/images/og-image.svg",
          "telephone": "+92 302-6006-280",
          "email": "info@mufaqar.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "134 B Ahmed Housing Multan Lahore",
            "addressCountry": "PK"
          },
          "areaServed": "PK",
          "priceRange": "$$",
          "description": "Full Stack Web Developer specializing in WordPress, React, Next.js, and e-commerce solutions with over a decade of experience."
        })
      }}
    />
  </Head>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
}

export default MyApp
