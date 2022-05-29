// Section
import Container from '@/components/Container'
import Heading from '@/components/Heading'

const Section = ({ className, id, children }) => {
  return (
    <section className={`pt-16 md:pt-20 lg:pt-24 ${className || ''}`} id={id}>
      {children}
    </section>
  )
}

export default Section
