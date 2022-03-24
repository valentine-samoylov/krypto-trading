// Blogs
import { useParallax } from 'react-scroll-parallax'
import Section from '@components/Section/Section'
import BlogCard from '@components/BlogCard/BlogCard'
import Button from '@components/Button/Button'
import { blogsContent } from './blogsContent'
import coinMN from '@assets/images/bg/coin-MN.png?as=webp'

const sectionTextContent = {
  headingText: 'Crypto Market Analysis',
  paragraphText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
}

const Blogs = () => {
  const mnPlx = useParallax({ speed: 10 })

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
          ref={mnPlx.ref}
        ></div>

        <div className="grid gap-8 mb-12 md:grid-cols-2">
          {blogsContent.map((item, idx) => (
            <BlogCard data={item} key={idx} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button kind="secondary" variant="lg">
            Enroll crypto University
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default Blogs
