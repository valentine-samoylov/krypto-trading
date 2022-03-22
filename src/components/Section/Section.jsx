// Section
import Container from '@components/Container/Container'
import Heading from '@components/Heading/Heading'

const Section = ({ className, heading, paragraph, variant, children, ...props }) => {
  return (
    <section className={`pt-16 md:pt-20 lg:pt-24 ${className || ''}`} {...props}>
      <div className="mb-14 text-center md:mb-16 lg:mb-20">
        <Container>
          <Heading>{heading}</Heading>
          <p className="text-xl text-white/60 md:text-2xl">{paragraph}</p>
        </Container>
      </div>
      <Container variant={variant}>{children}</Container>
    </section>
  )
}

export default Section
