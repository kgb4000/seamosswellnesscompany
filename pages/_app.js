import '../styles/globals.scss'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'
import Nav from '../components/Nav'
import FooterSection from '../components/FooterSection'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Nav />
      <Component {...pageProps} />
      <FooterSection />
    </>
  )
}
