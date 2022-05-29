// SectionHeader
import Container from '@/components/Container'
import Heading from '@/components/Heading'

const SectionHeader = ({ heading, paragraph }) => {
  return (
    <div className="mb-14 text-center md:mb-16 lg:mb-20">
      <Container>
        <Heading>{heading}</Heading>
        <p className="text-xl text-white/60 md:text-2xl">{paragraph}</p>
      </Container>
    </div>
  )
}

export default SectionHeader
