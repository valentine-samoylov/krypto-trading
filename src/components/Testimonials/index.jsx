// Testimonials
import { useRef } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/scss'
import 'swiper/css/pagination'
import Section from '@/components/Section'
import Wrapper from '@/components/Wrapper'
import SectionHeader from '@/components/SectionHeader'
import Container from '@/components/Container'
import TestimonialCard from '@/components/TestimonialCard'
import { testimonialsData } from '@/data'
import ArrowPrev from '@/assets/images/svg/ui-arrow-prev.svg'
import ArrowNext from '@/assets/images/svg/ui-arrow-next.svg'
import coinBTC from '@/assets/images/bg/coin-BTC.png?as=webp'
import coinETH from '@/assets/images/bg/coin-ETH.png?as=webp'
import coinMN from '@/assets/images/bg/coin-MN.png?as=webp'

const sectionHeaderProps = {
  heading: testimonialsData.heading,
  paragraph: testimonialsData.paragraph,
}

const Testimonials = () => {
  const mnPlx = useParallax({ speed: 5 })
  const btcPlx = useParallax({ speed: 10 })
  const ethPlx = useParallax({ speed: -10 })

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <Section className="pb-20 md:pb-28 lg:pb-36" id="testimonialsSection">
      <SectionHeader {...sectionHeaderProps} />
      <Wrapper>
        <Container variant="mobFluid">
          <div>
            <figure
              className="absolute top-0 -left-[4%] -z-[1] w-[5.833vh] h-[5.833vh] bg-contain pointer-events-none sm:-top-[40%] sm:left-0"
              style={{ backgroundImage: `url(${coinMN})` }}
              ref={mnPlx.ref}
            ></figure>
            <figure
              className="absolute -bottom-[10%] -left-[9%] -z-[1] w-[8.796vh] h-[8.796vh] bg-contain pointer-events-none sm:-left-[4%] md:-bottom-[25%]"
              style={{ backgroundImage: `url(${coinBTC})` }}
              ref={btcPlx.ref}
            ></figure>
            <figure
              className="absolute -bottom-[33%] -right-[18%] -z-[1] w-[14.815vh] h-[14.815vh] bg-contain pointer-events-none sm:-right-[2%]"
              style={{ backgroundImage: `url(${coinETH})` }}
              ref={ethPlx.ref}
            ></figure>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              dynamicBullets: true,
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
                initialSlide: 1,
              },
            }}
          >
            {testimonialsData.content.map((item, idx) => (
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
      </Wrapper>
    </Section>
  )
}

export default Testimonials
