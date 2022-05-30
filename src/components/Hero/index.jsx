// Hero
import { useParallax } from 'react-scroll-parallax'
import Container from '@/components/Container'
import Countdown from '@/components/Countdown'
import Button from '@/components/Button'
import data from '@/db'
import bgImage from '@/assets/images/bg/hero-bg.jpg?as=webp'
import IconBitcoin from '@/assets/images/svg/coin-icon-01.svg'
import IconLitecoin from '@/assets/images/svg/coin-icon-02.svg'
import IconChainlink from '@/assets/images/svg/coin-icon-03.svg'
import IconSiacoin from '@/assets/images/svg/coin-icon-04.svg'
import coinBTC from '@/assets/images/bg/coin-BTC.png?as=webp'
import coinETH from '@/assets/images/bg/coin-ETH.png?as=webp'
import coinLTC from '@/assets/images/bg/coin-LTC-01.png?as=webp'
import coinMN from '@/assets/images/bg/coin-MN.png?as=webp'

const cryptoIcons = [
  {
    icon: <IconBitcoin width="1.5rem" height="1.5rem" />,
  },
  {
    icon: <IconLitecoin width="1.5rem" height="1.5rem" />,
  },
  {
    icon: <IconChainlink width="1.5rem" height="1.5rem" />,
  },
  {
    icon: <IconSiacoin width="1.5rem" height="1.5rem" />,
  },
]

const cryptoLinks = data.hero.currencies.list.map((item, idx) => ({
  ...item,
  ...cryptoIcons[idx],
}))

const Hero = () => {
  const btcPlx = useParallax({ speed: 10 })
  const ethPlx = useParallax({ speed: -10 })
  const ltcPlx = useParallax({ speed: -15 })
  const mnPlx = useParallax({ speed: 15 })

  return (
    <section
      className="relative bg-center bg-no-repeat bg-cover ol-double-gradient"
      style={{ backgroundImage: `url(${bgImage})` }}
      id="heroSection"
    >
      <Container>
        <div className="relative z-0 flex flex-col items-center min-h-screen py-16 lg:pt-28 xl:pt-[6.667vw]">
          <figure
            className="absolute top-1/3 -left-[10%] -z-[1] w-[8.796vh] h-[8.796vh] bg-contain pointer-events-none sm:left-0"
            style={{ backgroundImage: `url(${coinBTC})` }}
            ref={btcPlx.ref}
          ></figure>
          <figure
            className="absolute -bottom-[18%] -left-[16%] -z-[1] w-[14.815vh] h-[14.815vh] bg-contain pointer-events-none sm:-left-[12%] lg:-left-[6%]"
            style={{ backgroundImage: `url(${coinETH})` }}
            ref={ethPlx.ref}
          ></figure>
          <figure
            className="absolute top-1/4 -right-[12%] -z-[1] w-[12.963vh] h-[12.963vh] bg-contain sm:-right-[5%] "
            style={{ backgroundImage: `url(${coinLTC})` }}
            ref={ltcPlx.ref}
          ></figure>
          <figure
            className="absolute bottom-[12%] right-0 -z-[1] w-[5.833vh] h-[5.833vh] bg-contain"
            style={{ backgroundImage: `url(${coinMN})` }}
            ref={mnPlx.ref}
          ></figure>

          <h1 className="mb-7 pt-12 text-5xl text-center font-bold md:text-6xl lg:text-8xl ">
            <span className="block">{data.hero.headingLine1}</span>
            <span className="block">{data.hero.headingLine2}</span>
          </h1>

          <Countdown data={data.hero.countdown} />

          <div className="flex flex-col gap-6 mb-10 sm:flex-row sm:gap-8">
            <Button as="anchor" kind="primary" variant="lg" shadow="xl" to="downloadsSection">
              {data.hero.buttons[0].text}
            </Button>
            <Button as="anchor" kind="secondary" variant="lg" shadow="xl" to="howToSection">
              {data.hero.buttons[1].text}
            </Button>
          </div>

          <p className="mb-6 text-lg font-medium uppercase">{data.hero.currencies.heading}</p>
          <ul className="grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-4">
            {cryptoLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  className="flex items-center text-xl transition ease-in-out lg:duration-300 lg:hover:text-red-500"
                  href={link.href}
                >
                  {link.icon}
                  <span className="ml-3">{link.label}</span>
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
