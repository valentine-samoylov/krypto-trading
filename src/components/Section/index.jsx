// Section
import Container from '@/components/Container'
import Heading from '@/components/Heading'

const Section = (props) => {
  return (
    <section className={`pt-16 md:pt-20 lg:pt-24 ${props.className || ''}`} id={props.id}>
      <div className="mb-14 text-center md:mb-16 lg:mb-20">
        <Container>
          <Heading>{props.heading}</Heading>
          <p className="text-xl text-white/60 md:text-2xl">{props.paragraph}</p>
        </Container>
      </div>
      <Container variant={props.variant}>{props.children}</Container>
    </section>
  )
}

export default Section
