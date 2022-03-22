// Testimonials
import { useRef } from 'react'
import { Navigation, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/mousewheel'
import Section from '@components/Section/Section'
import Container from '@components/Container/Container'
import TestimonialCard from '@components/TestimonialCard/TestimonialCard'
import ArrowPrev from '@assets/images/svg/ui-arrow-prev.svg'
import ArrowNext from '@assets/images/svg/ui-arrow-next.svg'
import authorImg01 from '@assets/images/content/author-01.jpg?as=webp'
import authorImg02 from '@assets/images/content/author-02.jpg?as=webp'
import authorImg03 from '@assets/images/content/author-03.jpg?as=webp'
import authorImg04 from '@assets/images/content/author-04.jpg?as=webp'
import authorImg05 from '@assets/images/content/author-05.jpg?as=webp'
import authorImg06 from '@assets/images/content/author-06.jpg?as=webp'
import CoinBTC from '@assets/images/svg/coin-01.svg'
import CoinETH from '@assets/images/svg/coin-02.svg'
import CoinMN from '@assets/images/svg/coin-04.svg'

const sectionTextContent = {
  headingText: '30 Million Users Worldwide',
  paragraphText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
}

const testimonialsContent = [
  {
    authorText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
    authorImgSrc: authorImg01,
    authorName: 'Cameron Williamson',
    authorPos: 'FX Trader',
  },
  {
    authorText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
    authorImgSrc: authorImg02,
    authorName: 'Bessie Cooper',
    authorPos: 'Stock Manager',
  },
  {
    authorText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
    authorImgSrc: authorImg03,
    authorName: 'Albert Flores',
    authorPos: 'Crypto Analyst',
  },
  {
    authorText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
    authorImgSrc: authorImg04,
    authorName: 'Matthew Foster',
    authorPos: 'Crypto Research Analyst',
  },
  {
    authorText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
    authorImgSrc: authorImg05,
    authorName: 'Eric Jones',
    authorPos: 'Customer Service Agent',
  },
  {
    authorText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
    authorImgSrc: authorImg06,
    authorName: "David O'Gallagher",
    authorPos: 'Research Analyst',
  },
]

const Testimonials = () => {
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
          <CoinMN
            className="absolute -top-[35%] -left-[4%] -z-[1] sm:-top-[40%] sm:left-0"
            width="5.833vh"
            height="5.833vh"
          />
          <CoinBTC
            className="absolute -bottom-[10%] -left-[9%] -z-[1] md:-bottom-[25%] sm:-left-[4%]"
            width="8.796vh"
            height="8.796vh"
          />
          <CoinETH
            className="absolute -bottom-[33%] -right-[18%] -z-[1] sm:-right-[2%]"
            width="14.815vh"
            height="14.815vh"
          />
        </div>
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={32}
          slidesPerView={'auto'}
          centeredSlides="true"
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
              className="slide-shadow flex flex-col items-center max-w-[18rem] py-16 rounded-xl border-2 border-red-500 text-center overflow-hidden md:max-w-[20rem] lg:max-w-none px-9"
              key={idx}
            >
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <button
            className="absolute top-[50%] left-8 z-20 hidden justify-center items-center w-16 h-16 rounded-full bg-red-500/20 text-2xl -translate-y-[50%] transition ease-in-out duration-300 hover:scale-105 active:bg-red-600/20 focus:outline-none focus:ring-2 focus:ring-red-500/40 disabled:opacity-60 lg:flex"
            ref={navigationPrevRef}
          >
            <ArrowPrev />
          </button>
          <button
            className="absolute top-[50%] right-8 z-20 hidden justify-center items-center w-16 h-16 rounded-full bg-red-500/20 text-2xl -translate-y-[50%] transition ease-in-out duration-300 hover:scale-105 active:bg-red-600/20 focus:outline-none focus:ring-2 focus:ring-red-500/40 disabled:opacity-60 lg:flex"
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
