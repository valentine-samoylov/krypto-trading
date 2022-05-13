// Home
import Layout from '@/layouts/layout'
import Hero from '@/components/Hero'
import HowTo from '@/components/HowTo'
import Cryptos from '@/components/Cryptos'
import Features from '@/components/Features'
import Downloads from '@/components/Downloads'
import Testimonials from '@/components/Testimonials'
import University from '@/components/University'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <HowTo />
      <Cryptos />
      <Features />
      <Downloads />
      <Testimonials />
      <University />
    </Layout>
  )
}

export default Home
