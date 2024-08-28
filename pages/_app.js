import Footer from '../components/newComponents/footer'
import Header from '../components/newComponents/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
}

export default MyApp
