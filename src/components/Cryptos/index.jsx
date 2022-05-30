// Cryptos
import { useRef } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/scss'
import 'swiper/css/pagination'
import Section from '@/components/Section'
import Wrapper from '@/components/Wrapper'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import CryptoCard from '@/components/CryptoCard'
import usePricesRequest from '@/hooks/usePricesRequest'
import data from '@/db'
import ArrowPrev from '@/assets/images/svg/ui-arrow-prev.svg'
import ArrowNext from '@/assets/images/svg/ui-arrow-next.svg'
import coinMN from '@/assets/images/bg/coin-MN.png?as=webp'
import coinLTC from '@/assets/images/bg/coin-LTC-02.png?as=webp'
import imgBTC from '@/assets/images/content/cryptos-01.jpg?as=webp'
import imgETH from '@/assets/images/content/cryptos-02.jpg?as=webp'
import imgLTC from '@/assets/images/content/cryptos-03.jpg?as=webp'
import imgXTZ from '@/assets/images/content/cryptos-04.jpg?as=webp'
import imgADA from '@/assets/images/content/cryptos-05.jpg?as=webp'
import imgDOGE from '@/assets/images/content/cryptos-06.jpg?as=webp'

const sectionHeaderProps = {
  heading: data.cryptos.heading,
  paragraph: data.cryptos.paragraph,
}

const endpoint =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20litecoin%2C%20tezos%2C%20cardano%2C%20dogecoin%2C&page=1&sparkline=false'

const Cryptos = () => {
  const mnPlx = useParallax({ speed: 10 })
  const ltcPlx = useParallax({ translateX: [-100, 100], rotate: [0, 360] })

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const { coinPrices } = usePricesRequest(endpoint)

  const cardImgs = [
    { img: imgBTC },
    { img: imgETH },
    { img: imgLTC },
    { img: imgXTZ },
    { img: imgADA },
    { img: imgDOGE },
  ]

  const cardsContent = data.cryptos.items.map((item, idx) => ({
    ...item,
    ...coinPrices[idx],
    ...cardImgs[idx],
  }))

  return (
    <Section className="pb-20 lg:pb-36" id="cryptosSection">
      <SectionHeader {...sectionHeaderProps} />
      <Wrapper>
        <Container variant="mobFluid">
          <div>
            <figure
              className="absolute -top-[15%] left-[3%] -z-[1] w-[5.833vh] h-[5.833vh] bg-contain pointer-events-none"
              style={{ backgroundImage: `url(${coinMN})` }}
              ref={mnPlx.ref}
            ></figure>
            <figure
              className="absolute -bottom-[14%] -left-[15%] sm:left-[0.5%] -z-[1] w-[14.815vh] h-[14.815vh] bg-contain pointer-events-none sm:-bottom-[17%] lg:-bottom-[21.5%]"
              style={{ backgroundImage: `url(${coinLTC})` }}
              ref={ltcPlx.ref}
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
            {cardsContent.map((item, idx) => (
              <SwiperSlide className="max-w-[18rem] md:max-w-[20rem] lg:max-w-none" key={idx}>
                <CryptoCard data={item} />
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

export default Cryptos
