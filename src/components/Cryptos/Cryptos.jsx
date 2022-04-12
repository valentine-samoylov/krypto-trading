// Cryptos
import { useState, useEffect, useRef } from 'react'
import { useParallax } from 'react-scroll-parallax'
import axios from 'axios'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import Section from '@components/Section/Section'
import Container from '@components/Container/Container'
import CryptoCard from '@components/CryptoCard/CryptoCard'
import imgBTC from '@assets/images/content/cryptos-01.jpg?as=webp'
import imgETH from '@assets/images/content/cryptos-02.jpg?as=webp'
import imgLTC from '@assets/images/content/cryptos-03.jpg?as=webp'
import imgXTZ from '@assets/images/content/cryptos-04.jpg?as=webp'
import imgADA from '@assets/images/content/cryptos-05.jpg?as=webp'
import imgDOGE from '@assets/images/content/cryptos-06.jpg?as=webp'
import ArrowPrev from '@assets/images/svg/ui-arrow-prev.svg'
import ArrowNext from '@assets/images/svg/ui-arrow-next.svg'
import coinMN from '@assets/images/bg/coin-MN.png?as=webp'
import coinLTC from '@assets/images/bg/coin-LTC-02.png?as=webp'

const sectionProps = {
  heading: 'Available Cryptos',
  paragraph: 'Check out our cryptocurrency offerings and current exchange rates.',
  id: 'cryptosSection',
  variant: 'wide',
}

const endpoints = [
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
  'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  'https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd',
  'https://api.coingecko.com/api/v3/simple/price?ids=tezos&vs_currencies=usd',
  'https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd',
  'https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd',
]

const Cryptos = () => {
  const mnPlx = useParallax({ speed: 10 })
  const ltcPlx = useParallax({ translateX: [-100, 100], rotate: [0, 360] })

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const [coinData, setCoinsPrices] = useState([])

  const getCoinPrices = () => {
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((...resData) => {
        let coinValues = []

        for (let i = 0; i < resData.length; i++) {
          let coin = Object.values(resData[i].data)
          coinValues.push(coin[0].usd)
        }
        setCoinsPrices(coinValues)
      })
    )
  }

  useEffect(() => {
    getCoinPrices()
  }, [])

  const cryptosContent = [
    {
      imgSrc: imgBTC,
      title: 'Bitcoin',
      text: 'A very accessible and versatile currency with big liquidity and high return potential. ',
      cryptoPrice: coinData[0],
    },
    {
      imgSrc: imgETH,
      title: 'Ethereum',
      text: 'A secure, decentralized currency, second-most popular Crypto in the market.',
      cryptoPrice: coinData[1],
    },
    {
      imgSrc: imgLTC,
      title: 'Litecoin',
      text: 'Fast transitions, lower fees than other cryptocurrencies. Explosive returns are possible during uptrends.',
      cryptoPrice: coinData[2],
    },
    {
      imgSrc: imgXTZ,
      title: 'Tezos',
      text: 'Self-amending multi-purpose blockchain platform for secure decentralized transactions.',
      cryptoPrice: coinData[3],
    },
    {
      imgSrc: imgADA,
      title: 'Cardano',
      text: 'An environmentally friendly currency with low fees for fast and secure decentralized transactions.',
      cryptoPrice: coinData[4],
    },
    {
      imgSrc: imgDOGE,
      title: 'Dogecoin',
      text: 'Send value quick and securely to anyone internally, accepted by many vendors. Perfectly fits for low-capital investments.',
      cryptoPrice: coinData[5],
    },
  ]

  return (
    <Section className="pb-20 lg:pb-36" {...sectionProps}>
      <Container variant="mobFluid">
        <div>
          <div
            className="absolute -top-[15%] left-[3%] -z-[1] w-[5.833vh] h-[5.833vh] bg-contain pointer-events-none"
            style={{ backgroundImage: `url(${coinMN})` }}
            ref={mnPlx.ref}
          ></div>
          <div
            className="absolute -bottom-[14%] -left-[15%] sm:left-[0.5%] -z-[1] w-[14.815vh] h-[14.815vh] bg-contain pointer-events-none sm:-bottom-[17%] lg:-bottom-[21.5%]"
            style={{ backgroundImage: `url(${coinLTC})` }}
            ref={ltcPlx.ref}
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
              initialSlide: 1,
            },
          }}
        >
          {cryptosContent.map((item, idx) => (
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
    </Section>
  )
}

export default Cryptos
