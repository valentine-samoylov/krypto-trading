// Testimonials
import { useRef } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/scss'
import Section from '@components/Section/Section'
import Container from '@components/Container/Container'
import TestimonialCard from '@components/TestimonialCard/TestimonialCard'
import { testimonialsContent } from './testimonialsContent'
import ArrowPrev from '@assets/images/svg/ui-arrow-prev.svg'
import ArrowNext from '@assets/images/svg/ui-arrow-next.svg'
import coinBTC from '@assets/images/bg/coin-BTC.png?as=webp'
import coinETH from '@assets/images/bg/coin-ETH.png?as=webp'
import coinMN from '@assets/images/bg/coin-MN.png?as=webp'

const sectionTextContent = {
  headingText: '30 Million Users Worldwide',
  paragraphText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
}

const Testimonials = () => {
  const mnPlx = useParallax({ speed: 5 })
  const btcPlx = useParallax({ speed: 10 })
  const ethPlx = useParallax({ speed: -10 })

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <Section
      className="pb-20 md:pb-28 lg:pb-36"
      id="cryptosSection"
      heading={sectionTextContent.headingText}
      paragraph={sectionTextContent.paragraphText}
      variant="wide"
    >
      <Container variant="mobFluid">
        <div>
          <div
            className="absolute top-0 -left-[4%] -z-[1] w-[5.833vh] h-[5.833vh] bg-contain pointer-events-none sm:-top-[40%] sm:left-0"
            style={{ backgroundImage: `url(${coinMN})` }}
            ref={mnPlx.ref}
          ></div>
          <div
            className="absolute -bottom-[10%] -left-[9%] -z-[1] w-[8.796vh] h-[8.796vh] bg-contain pointer-events-none sm:-left-[4%] md:-bottom-[25%]"
            style={{ backgroundImage: `url(${coinBTC})` }}
            ref={btcPlx.ref}
          ></div>
          <div
            className="absolute -bottom-[33%] -right-[18%] -z-[1] w-[14.815vh] h-[14.815vh] bg-contain pointer-events-none sm:-right-[2%]"
            style={{ backgroundImage: `url(${coinETH})` }}
            ref={ethPlx.ref}
          ></div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialsContent.map((item, idx) => (
            <SwiperSlide
              className="max-w-[18rem] slide-shadow md:max-w-[20rem] lg:max-w-none"
              key={idx}
            >
              <TestimonialCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <button
            className="absolute top-[50%] left-8 z-20 hidden justify-center items-center w-16 h-16 rounded-full bg-red-500/20 text-2xl -translate-y-[50%] transition will-change-transform lg:flex lg:hover:scale-105 lg:active:bg-red-600/20 lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40 lg:disabled:opacity-60"
            ref={navigationPrevRef}
          >
            <ArrowPrev />
          </button>
          <button
            className="absolute top-[50%] right-8 z-20 hidden justify-center items-center w-16 h-16 rounded-full bg-red-500/20 text-2xl -translate-y-[50%] transition will-change-transform lg:flex lg:hover:scale-105 lg:active:bg-red-600/20 lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40 lg:disabled:opacity-60"
            ref={navigationNextRef}
          >
            <ArrowNext />
          </button>
        </div>
      </Container>
    </Section>
  )
}

export default Testimonials
