// HowToTrade
import { useParallax } from 'react-scroll-parallax'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Container from '@/components/Container'
import HowToTabs from '@/components/HowToTabs'
import { howToData } from '@/data'
import coinETH from '@/assets/images/bg/coin-ETH.png?as=webp'

const sectionHeaderProps = {
  heading: howToData.heading,
  paragraph: howToData.paragraph,
}

const HowToTrade = () => {
  const ethPlx = useParallax({ speed: -10 })

  return (
    <Section className="pb-8" id="howToSection">
      <SectionHeader {...sectionHeaderProps}></SectionHeader>
      <Container>
        <div className="relative z-0">
          <figure
            className="absolute -bottom-[11%] -right-[20%] -z-[1] w-[14.815vh] h-[14.815vh] bg-contain pointer-events-none lg:-right-[8%] "
            style={{ backgroundImage: `url(${coinETH})` }}
            ref={ethPlx.ref}
          ></figure>
          <HowToTabs data={howToData.tabsContent} />
        </div>
      </Container>
    </Section>
  )
}

export default HowToTrade
