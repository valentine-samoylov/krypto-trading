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
import CoinBTC from '@assets/images/svg/coin-01.svg'
import CoinETH from '@assets/images/svg/coin-02.svg'
import CoinLC from '@assets/images/svg/coin-03.svg'
import CoinMN from '@assets/images/svg/coin-04.svg'

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
          <div>
            <CoinBTC
              className="absolute top-[20%] -left-[10%] -z-[1] sm:left-0"
              width="8.796vh"
              height="8.796vh"
            />
            <CoinETH
              className="absolute -bottom-[7.5%] -left-[16%] -z-[1] sm:-left-[12%] lg:-left-[6%]"
              width="14.815vh"
              height="14.815vh"
            />
            <CoinLC
              className="absolute top-[27%] -right-[12%] -z-[1] sm:-right-[5%]"
              width="12.963vh"
              height="12.963vh"
            />
            <CoinMN
              className="absolute bottom-[25%] right-0 -z-[1]"
              width="5.833vh"
              height="5.833vh"
            />
          </div>
          <h1 className="mb-7 pt-12 text-5xl text-center font-bold md:text-6xl lg:text-8xl ">
            <span className="block">Next Generation</span>{' '}
            <span className="block">Crypto Trading</span>
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
