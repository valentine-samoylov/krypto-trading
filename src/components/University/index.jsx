// University
import { useParallax } from 'react-scroll-parallax'
import Section from '@/components/Section'
import UniversityCard from '@/components/UniversityCard'
import Button from '@/components/Button'
import { universityData } from '@/data'
import coinMN from '@/assets/images/bg/coin-MN.png?as=webp'

const sectionProps = {
  heading: universityData.heading,
  paragraph: universityData.paragraph,
  id: 'uniSection',
}

const University = () => {
  const mnPlx = useParallax({ speed: 10 })

  return (
    <Section className="pb-14 md:pb-16 lg:pb-20" {...sectionProps}>
      <div className="relative z-0">
        <div
          className="absolute -bottom-[11%] -right-[13%] -z-[1] w-[8.333vh] h-[8.333vh] bg-contain pointer-events-none sm:-bottom-[19%] sm:-right-[6.5%]"
          style={{ backgroundImage: `url(${coinMN})` }}
          ref={mnPlx.ref}
        ></div>

        <div className="grid gap-8 mb-12 md:grid-cols-2">
          {universityData.content.map((item, idx) => (
            <UniversityCard data={item} key={idx} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button kind="secondary" variant="lg">
            Enroll Crypto University
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default University
