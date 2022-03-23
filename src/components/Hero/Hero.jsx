// Hero
import React from 'react'
import Container from '@components/Container/Container'
import Countdown from '@components/Countdown/Countdown'
import ButtonLink from '@components/Button/ButtonLink'
import bgImage from '@assets/images/bg/hero-bg.jpg?as=webp'
import IconBitcoin from '@assets/images/svg/coin-icon-01.svg'
import IconLitecoin from '@assets/images/svg/coin-icon-02.svg'
import IconChainlink from '@assets/images/svg/coin-icon-03.svg'
import IconSiacoin from '@assets/images/svg/coin-icon-04.svg'
import coinBTC from '@assets/images/bg/coin-BTC.png?as=webp'
import coinETH from '@assets/images/bg/coin-ETH.png?as=webp'
import coinLTC from '@assets/images/bg/coin-LTC-01.png?as=webp'
import coinMN from '@assets/images/bg/coin-MN.png?as=webp'

const currenciesData = [
  {
    currencyIcon: <IconBitcoin width="1.5rem" height="1.5rem" />,
    currencyLink: '#',
    currencyText: 'Bitcoin',
  },
  {
    currencyIcon: <IconLitecoin width="1.5rem" height="1.5rem" />,
    currencyLink: '#',
    currencyText: 'Litecoin',
  },
  {
    currencyIcon: <IconChainlink width="1.5rem" height="1.5rem" />,
    currencyLink: '#',
    currencyText: 'Chainlink',
  },
  {
    currencyIcon: <IconSiacoin width="1.5rem" height="1.5rem" />,
    currencyLink: '#',
    currencyText: 'Siacoin',
  },
]

const Hero = () => {
  return (
    <section
      className="relative bg-center bg-no-repeat bg-cover ol-double-gradient"
      style={{ backgroundImage: `url(${bgImage})` }}
      id="heroSection"
    >
      <Container>
        <div className="relative z-0 flex flex-col items-center min-h-screen py-16 lg:py-[6.25rem]">
          <div
            className="absolute top-[20%] -left-[10%] -z-[1] w-[8.796vh] h-[8.796vh] bg-contain pointer-events-none sm:left-0"
            style={{ backgroundImage: `url(${coinBTC})` }}
          ></div>
          <div
            className="absolute -bottom-[7.5%] -left-[16%] -z-[1] w-[14.815vh] h-[14.815vh] bg-contain pointer-events-none sm:-left-[12%] lg:-left-[6%]"
            style={{ backgroundImage: `url(${coinETH})` }}
          ></div>
          <div
            className="absolute top-[27%] -right-[12%] -z-[1] w-[12.963vh] h-[12.963vh] bg-contain sm:-right-[5%] "
            style={{ backgroundImage: `url(${coinLTC})` }}
          ></div>
          <div
            className="absolute bottom-[25%] right-0 -z-[1] w-[5.833vh] h-[5.833vh] bg-contain"
            style={{ backgroundImage: `url(${coinMN})` }}
          ></div>

          <h1 className="mb-7 pt-12 text-5xl text-center font-bold md:text-6xl lg:text-8xl ">
            Next Generation <br /> Crypto Trading
          </h1>
          <p className="mb-6 text-lg">Crypto Market Starts in</p>

          <Countdown />

          <div className="flex flex-col gap-6 mb-10 sm:flex-row sm:gap-8">
            <ButtonLink kind="primary" variant="lg" shadow="xl" href="#downloadsSection">
              Download App
            </ButtonLink>
            <ButtonLink kind="secondary" variant="lg" shadow="xl">
              Trade Crypto
            </ButtonLink>
          </div>

          <p className="mb-6 text-lg font-medium uppercase">We accept</p>
          <ul className="grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-4">
            {currenciesData.map((item, idx) => (
              <li key={idx}>
                <a
                  className="flex items-center text-xl transition ease-in-out duration-300 hover:text-red-500 hover:scale-105"
                  href={item.currencyLink}
                >
                  {item.currencyIcon}
                  <span className="ml-3">{item.currencyText}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Hero
