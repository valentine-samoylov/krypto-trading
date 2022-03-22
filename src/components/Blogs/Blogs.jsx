// Blogs
import Section from '@components/Section/Section'
import BlogCard from '@components/BlogCard/BlogCard'
import ButtonLink from '@components/Button/ButtonLink'
import { blogsContent } from './blogsContent'
import coinMN from '@assets/images/bg/coin-MN.png?as=webp'

const sectionTextContent = {
  headingText: 'Crypto Market Analysis',
  paragraphText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
}

const Blogs = () => {
  return (
    <Section
      className="pb-14 md:pb-16 lg:pb-20"
      heading={sectionTextContent.headingText}
      paragraph={sectionTextContent.paragraphText}
      id="blogsSection"
    >
      <div className="relative z-0">
        <div
          className="absolute -bottom-[11%] -right-[13%] -z-[1] w-[8.333vh] h-[8.333vh] bg-contain pointer-events-none sm:-bottom-[19%] sm:-right-[6.5%]"
          style={{ backgroundImage: `url(${coinMN})` }}
        ></div>

        <div className="grid gap-8 mb-12 md:grid-cols-2">
          {blogsContent.map((item, idx) => (
            <BlogCard item={item} key={idx} />
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonLink kind="secondary" variant="lg">
            Enroll crypto University
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}

export default Blogs
