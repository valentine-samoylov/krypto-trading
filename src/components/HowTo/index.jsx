// HowToTrade
import { useParallax } from 'react-scroll-parallax'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Container from '@/components/Container'
import HowToTabs from '@/components/HowToTabs'
import data from '@/db'
import coinETH from '@/assets/images/bg/coin-ETH.png?as=webp'
import imgHowTo01 from '@/assets/images/bg/how-to-01.jpg?as=webp'
import imgHowTo02 from '@/assets/images/bg/how-to-02.jpg?as=webp'
import imgHowTo03 from '@/assets/images/bg/how-to-03.jpg?as=webp'
import imgHowTo04 from '@/assets/images/bg/how-to-04.jpg?as=webp'
import movHowTo01 from '@/assets/videos/how-to-01.mp4'
import movHowTo02 from '@/assets/videos/how-to-02.mp4'
import movHowTo03 from '@/assets/videos/how-to-03.mp4'
import movHowTo04 from '@/assets/videos/how-to-04.mp4'

const sectionHeaderProps = {
  heading: data.howTo.heading,
  paragraph: data.howTo.paragraph,
}

const tabsMedia = [
  { img: imgHowTo01, mov: movHowTo01 },
  { img: imgHowTo02, mov: movHowTo02 },
  { img: imgHowTo03, mov: movHowTo03 },
  { img: imgHowTo04, mov: movHowTo04 },
]

const tabsContent = data.howTo.tabs.map((item, idx) => ({
  ...item,
  ...tabsMedia[idx],
}))

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
          <HowToTabs data={tabsContent} subheading={data.howTo.subheading} />
        </div>
      </Container>
    </Section>
  )
}

export default HowToTrade
