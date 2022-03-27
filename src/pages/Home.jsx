// Home
import Header from '@components/Header/Header'
import Hero from '@components/Hero/Hero'
import HowTo from '@components/HowTo/HowTo'
import Cryptos from '@components/Cryptos/Cryptos'
import Features from '@components/Features/Features'
import Downloads from '@components/Downloads/Downloads'
import Testimonials from '@components/Testimonials/Testimonials'
import University from '@components/University/University'
import Footer from '@components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-cs-primary text-white leading-tight">
        <Hero />
        <HowTo />
        <Cryptos />
        <Features />
        <Downloads />
        <Testimonials />
        <University />
      </main>
      <Footer />
    </>
  )
}

export default Home
