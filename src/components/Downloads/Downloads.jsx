// Downloads
import Container from '@components/Container/Container'
import Heading from '@components/Heading/Heading'
import ButtonLink from '@components/Button/ButtonLink'
import bgImage from '@assets/images/bg/downloads-bg.jpg?as=webp'
import BadgeGooglePlay from '@assets/images/svg/badge-google-play.svg'
import BadgeAppStore from '@assets/images/svg/badge-app-store.svg'

const downloadLinksData = [
  {
    btnLogo: (
      <BadgeGooglePlay width="11.375rem" height="100%" title="Download from Google Play Store" />
    ),
    href: '#',
  },
  {
    btnLogo: <BadgeAppStore width="11.375rem" height="100%" title="Download on the App Store" />,
    href: '#',
  },
]

const Downloads = () => {
  return (
    <section
      className="py-20 bg-center bg-no-repeat bg-cover ol-blend-darken md:py-32 lg:py-40"
      style={{ backgroundImage: `url(${bgImage})` }}
      id="downloadsSection"
    >
      <Container>
        <Heading>Most advanced crypto trading platform ever!</Heading>
        <div className="flex flex-col justify-center items-center gap-6 py-5 sm:flex-row sm:gap-8">
          {downloadLinksData.map((item, idx) => (
            <ButtonLink kind="download" key={idx}>
              {item.btnLogo}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Downloads
