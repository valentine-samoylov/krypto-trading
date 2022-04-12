// HowToTrade
import { useParallax } from 'react-scroll-parallax'
import Section from '@components/Section/Section'
import HowToTabs from '@components/HowToTabs/HowToTabs'
import { howToContent } from './howToContent'
import coinETH from '@assets/images/bg/coin-ETH.png?as=webp'

const sectionProps = {
  heading: 'How to Trade With Krypto',
  paragraph: 'Becoming a cryptotrader on our platform has never been easier!',
  id: 'howToSection',
}

const HowToTrade = () => {
  const ethPlx = useParallax({ speed: -10 })

  return (
    <Section className="pb-8" {...sectionProps}>
      <div className="relative z-0">
        <div
          className="absolute -bottom-[11%] -right-[20%] -z-[1] w-[14.815vh] h-[14.815vh] bg-contain pointer-events-none lg:-right-[8%] "
          style={{ backgroundImage: `url(${coinETH})` }}
          ref={ethPlx.ref}
        ></div>

        <HowToTabs data={howToContent} />
      </div>
    </Section>
  )
}

export default HowToTrade
