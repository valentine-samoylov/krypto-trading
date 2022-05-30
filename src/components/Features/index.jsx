// Features
import { useParallax } from 'react-scroll-parallax'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Container from '@/components/Container'
import FeatureCard from '@/components/FeatureCard'
import data from '@/db'
import IconContest from '@/assets/images/svg/features-icon-01.svg'
import IconCommission from '@/assets/images/svg/features-icon-02.svg'
import IconSecurity from '@/assets/images/svg/features-icon-03.svg'
import IconWithdraw from '@/assets/images/svg/features-icon-04.svg'
import IconMonthly from '@/assets/images/svg/features-icon-05.svg'
import IconSupport from '@/assets/images/svg/features-icon-06.svg'
import coinBTC from '@/assets/images/bg/coin-BTC.png?as=webp'

const sectionHeaderProps = {
  heading: data.features.heading,
  paragraph: data.features.paragraph,
}

const featureIcons = [
  {
    icon: <IconContest className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
  },
  {
    icon: <IconCommission className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
  },
  {
    icon: <IconSecurity className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
  },
  {
    icon: <IconWithdraw className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
  },
  {
    icon: <IconMonthly className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
  },
  {
    icon: <IconSupport className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
  },
]

const featureItems = data.features.items.map((item, idx) => ({
  ...item,
  ...featureIcons[idx],
}))

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
            {featureItems.map((item, idx) => (
              <FeatureCard data={item} key={idx} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Features
