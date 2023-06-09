// Footer
import { Link } from 'react-scroll'
import Container from '@/components/Container'
import data from '@/db'
import Logo from '@/components/Logo'
import IconYoutube from '@/assets/images/svg/social-youtube.svg'
import IconLinkedIn from '@/assets/images/svg/social-linkedin.svg'
import IconFacebook from '@/assets/images/svg/social-facebook.svg'
import IconBitcoin from '@/assets/images/svg/social-bitcoin.svg'

const socialIcons = [
  { icon: <IconYoutube title="YouTube Channel" /> },
  { icon: <IconLinkedIn title="LinkedIn Page" /> },
  { icon: <IconFacebook title="Facebook Community" /> },
  { icon: <IconBitcoin title="Bitcoin Website" /> },
]

const socialLinks = data.footer.social.links.map((item, idx) => ({
  ...item,
  ...socialIcons[idx],
}))

const Footer = () => {
  return (
    <footer className="pt-14 pb-16 bg-navy text-xs text-white md:pt-16 lg:pt-20 md:pb-20 lg:pb-24">
      <Container>
        <div className="divide-y divide-white/20">
          <div className="flex flex-col flex-wrap gap-8 pb-14 sm:flex-row sm:items-start sm:max-w-none sm:text-left md:pb-16 lg:pb-20 lg:flex-nowrap">
            <div className="sm:max-w-[16rem]">
              <Logo className="mb-5 md:mb-8" />
              <p className="text-lg">{data.footer.text}</p>
            </div>

            <div className="flex flex-wrap gap-8 sm:flex-nowrap">
              <div className="md:min-w-[10rem]">
                <h3 className="mb-6 text-2xl text-red-500 font-medium uppercase md:mb-9">
                  {data.footer.anchors.heading}
                </h3>
                <ul className="space-y-4 text-lg">
                  {data.footer.anchors.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        className="transition-colors lg:hover:text-red-500 lg:hover:underline"
                        href="#"
                        to={link.to}
                        smooth={true}
                        offset={-64}
                        duration={1000}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:min-w-[10rem]">
                <h3 className="mb-6 text-2xl text-red-500 font-medium uppercase md:mb-9">
                  {data.footer.legal.heading}
                </h3>
                <ul className="space-y-4 text-lg">
                  {data.footer.legal.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        className="transition-colors lg:hover:text-red-500 lg:hover:underline"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:ml-auto">
              <h3 className="mb-6 text-2xl text-red-500 font-medium uppercase md:mb-9">
                {data.footer.newsletter.heading}
              </h3>
              <p className="mb-6 text-xl text-white text-white/60">
                {data.footer.newsletter.subheading}
              </p>
              <form action="#">
                <div className="relative flex flex-col mb-3 md:min-w-[22rem]">
                  <input
                    className="w-full pr-32 pl-6 py-4 rounded-[3.125rem] bg-white text-lg text-black/60 transition-all focus:outline-none focus:ring-4 focus:ring-red-500/40 placeholder:text-black/20"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <input
                    className="absolute block top-2/4 right-3 p-3 rounded-[2.5rem] border-0 bg-red-500 text-sm font-medium uppercase whitespace-nowrap -translate-y-1/2 cursor-pointer transition lg:hover:scale-105 lg:active:shadow-inner lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40 lg:will-change-transform"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
                <p className="text-sm text-white/60">{data.footer.newsletter.text}</p>
              </form>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex flex-col items-center flex-wrap gap-4 sm:flex-row">
              <ul className="flex flex-shrink-0 gap-4 sm:min-w-[200px]">
                {data.footer.credits.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      className="transition-colors lg:hover:text-red-500 lg:hover:underline"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="sm:mx-auto sm:text-center">
                <span>Design by xpence, </span>
                <a
                  className="transition-colors lg:hover:text-red-500 lg:hover:underline"
                  href="https://valentine-samoylov.vercel.app/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  coded with ❤️ by Valentine Samoylov
                </a>
              </div>

              <ul className="flex sm:justify-end gap-4 sm:gap-3 sm:min-w-[200px]">
                {socialLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      className="text-2xl sm:text-xs transition-colors lg:hover:text-red-500"
                      href={link.href}
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
