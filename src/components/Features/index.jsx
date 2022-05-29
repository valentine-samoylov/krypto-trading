// Features
import { useParallax } from 'react-scroll-parallax'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Container from '@/components/Container'
import FeatureCard from '@/components/FeatureCard'
import { featuresData } from '@/data'
import coinBTC from '@/assets/images/bg/coin-BTC.png?as=webp'

const sectionHeaderProps = {
  heading: featuresData.heading,
  paragraph: featuresData.paragraph,
}

const Features = () => {
  const btcPlx = useParallax({ speed: -10 })

  return (
    <Section className="pb-20 md:pb-28 lg:pb-36" id="featuresSection">
      <SectionHeader {...sectionHeaderProps} />
      <Container>
        <div className="relative z-0">
          <figure
            className="absolute -top-[18%] -right-[15%] sm:-right-[6%] -z-[1] w-[8.796vh] h-[8.796vh] bg-contain pointer-events-none sm:-top-[25%] lg:-top-[40%]"
            style={{ backgroundImage: `url(${coinBTC})` }}
            ref={btcPlx.ref}
          ></figure>

          <div className="grid gap-8 justify-center sm:grid-cols-2 xl:grid-cols-3 ">
            {featuresData.items.map((item, idx) => (
              <FeatureCard data={item} key={idx} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Features
