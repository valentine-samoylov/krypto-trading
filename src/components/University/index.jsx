// University
import { useParallax } from 'react-scroll-parallax'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Container from '@/components/Container'
import UniversityCard from '@/components/UniversityCard'
import Button from '@/components/Button'
import data from '@/db'
import coinMN from '@/assets/images/bg/coin-MN.png?as=webp'
import articleImg01 from '@/assets/images/content/article-01.jpg?as=webp'
import articleImg02 from '@/assets/images/content/article-02.jpg?as=webp'
import articleImg03 from '@/assets/images/content/article-03.jpg?as=webp'
import articleImg04 from '@/assets/images/content/article-04.jpg?as=webp'

const sectionHeaderProps = {
  heading: data.university.heading,
  paragraph: data.university.paragraph,
}

const articlesPreviews = [
  { img: articleImg01 },
  { img: articleImg02 },
  { img: articleImg03 },
  { img: articleImg04 },
]

const cardsContent = data.university.items.map((item, idx) => ({
  ...item,
  ...articlesPreviews[idx],
}))

const University = () => {
  const mnPlx = useParallax({ speed: 10 })

  return (
    <Section className="pb-14 md:pb-16 lg:pb-20" id="uniSection">
      <SectionHeader {...sectionHeaderProps}></SectionHeader>
      <Container>
        <div className="relative z-0">
          <figure
            className="absolute -bottom-[11%] -right-[13%] -z-[1] w-[8.333vh] h-[8.333vh] bg-contain pointer-events-none sm:-bottom-[19%] sm:-right-[6.5%]"
            style={{ backgroundImage: `url(${coinMN})` }}
            ref={mnPlx.ref}
          ></figure>

          <div className="grid gap-8 mb-12 md:grid-cols-2">
            {cardsContent.map((item, idx) => (
              <UniversityCard data={item} key={idx} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button kind="secondary" variant="lg">
              {data.university.btnText}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default University
