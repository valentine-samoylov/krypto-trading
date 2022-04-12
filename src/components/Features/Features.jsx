// Features
import { useParallax } from 'react-scroll-parallax'
import Section from '@components/Section/Section'
import FeatureCard from '@components/FeatureCard/FeatureCard'
import { featuresContent } from './featuresContent'
import coinBTC from '@assets/images/bg/coin-BTC.png?as=webp'

const sectionProps = {
  heading: 'Attractive Features',
  paragraph:
    'Our key features that set the standard in the industry and are so well appreciated by our users.',
  id: 'featuresSection',
}

const Features = () => {
  const btcPlx = useParallax({ speed: -10 })

  return (
    <Section className="pb-20 md:pb-28 lg:pb-36" {...sectionProps}>
      <div className="relative z-0">
        <div
          className="absolute -top-[18%] -right-[15%] sm:-right-[6%] -z-[1] w-[8.796vh] h-[8.796vh] bg-contain pointer-events-none sm:-top-[25%] lg:-top-[40%]"
          style={{ backgroundImage: `url(${coinBTC})` }}
          ref={btcPlx.ref}
        ></div>

        <div className="grid gap-8 justify-center sm:grid-cols-2 xl:grid-cols-3 ">
          {featuresContent.map((item, idx) => (
            <FeatureCard data={item} key={idx} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Features
