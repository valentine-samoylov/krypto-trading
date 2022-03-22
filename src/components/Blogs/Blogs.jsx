// Blogs
import Section from '@components/Section/Section'
import BlogCard from '@components/BlogCard/BlogCard'
import ButtonLink from '@components/Button/ButtonLink'
import articleImg01 from '@assets/images/content/blogs-01.jpg?as=webp'
import articleImg02 from '@assets/images/content/blogs-02.jpg?as=webp'
import articleImg03 from '@assets/images/content/blogs-03.jpg?as=webp'
import articleImg04 from '@assets/images/content/blogs-04.jpg?as=webp'
import CoinMN from '@assets/images/svg/coin-04.svg'

const sectionTextContent = {
  headingText: 'Crypto Market Analysis',
  paragraphText: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.',
}

const articlesContent = [
  {
    imgSrc: articleImg01,
    title: 'How to trade Bitcoin',
    text: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    linkHref: '#',
  },
  {
    imgSrc: articleImg02,
    title: 'Gain the best exchange',
    text: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    linkHref: '#',
  },
  {
    imgSrc: articleImg03,
    title: 'Reduce your loosing',
    text: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    linkHref: '#',
  },
  {
    imgSrc: articleImg04,
    title: 'Win 50-50 trading strategy',
    text: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
    linkHref: '#',
  },
]

const Blogs = () => {
  return (
    <Section
      className="pb-14 md:pb-16 lg:pb-20"
      heading={sectionTextContent.headingText}
      paragraph={sectionTextContent.paragraphText}
      id="blogsSection"
    >
      <div className="relative z-0">
        <CoinMN
          className="absolute -bottom-[11%] -right-[13%] -z-[1] sm:-bottom-[19%] sm:-right-[6.5%]"
          width="8.333vh"
          height="8.333vh"
        />
        <div className="grid gap-8 mb-12 md:grid-cols-2">
          {articlesContent.map((item, idx) => (
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
