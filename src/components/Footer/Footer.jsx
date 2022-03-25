// Footer
import Container from '@components/Container/Container'
import BrandLink from '@components/BrandLink/BrandLink'
import IconYoutube from '@assets/images/svg/social-youtube.svg'
import IconLinkedIn from '@assets/images/svg/social-linkedin.svg'
import IconFacebook from '@assets/images/svg/social-facebook.svg'
import IconBitcoin from '@assets/images/svg/social-bitcoin.svg'

const anchorLinks = [
  { href: '#', linkText: 'How it works' },
  { href: '#', linkText: 'Cryptos' },
  { href: '#', linkText: 'Features' },
  { href: '#', linkText: 'Testimonial' },
  { href: '#', linkText: 'Blogs' },
]

const legalLinks = [
  { href: '#', linkText: 'Terms of use' },
  { href: '#', linkText: 'Terms of conditions' },
  { href: '#', linkText: 'Privacy policy' },
  { href: '#', linkText: 'Cookie policy' },
]

const creditsLinks = [
  { href: '#', linkText: 'Privacy & Terms' },
  { href: '#', linkText: 'Contact Us' },
]

const socialLinks = [
  { href: '#', icon: <IconYoutube title="YouTube Channel" /> },
  { href: '#', icon: <IconLinkedIn title="LinkedIn Page" /> },
  { href: '#', icon: <IconFacebook title="Facebook Community" /> },
  { href: '#', icon: <IconBitcoin title="Bitcoin Website" /> },
]

const Footer = () => {
  return (
    <footer className="pt-14 pb-16 bg-cs-primary text-xs text-white md:pt-16 lg:pt-20 md:pb-20 lg:pb-24">
      <Container>
        <div className="divide-y divide-white/20">
          <div className="flex flex-col flex-wrap gap-8 pb-14 sm:flex-row sm:items-start sm:max-w-none sm:text-left md:pb-16 lg:pb-20 lg:flex-nowrap">
            <div className="sm:max-w-[16rem]">
              <BrandLink className="mb-5 md:mb-8" />
              <p className="text-lg">
                Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut.
                Pellentesque sit id tempor turpis.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 sm:flex-nowrap">
              <div className="md:min-w-[10rem]">
                <h3 className="mb-6 text-2xl text-red-500 font-medium uppercase md:mb-9">Links</h3>
                <ul className="space-y-4 text-lg">
                  {anchorLinks.map((item, idx) => (
                    <li key={idx}>
                      <a
                        className="transition-colors ease-in-out duration-300 lg:hover:text-red-500"
                        href={item.href}
                      >
                        {item.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:min-w-[10rem]">
                <h3 className="mb-6 text-2xl text-red-500 font-medium uppercase md:mb-9">Legal</h3>
                <ul className="space-y-4 text-lg">
                  {legalLinks.map((item, idx) => (
                    <li key={idx}>
                      <a
                        className="transition-colors ease-in-out duration-300 lg:hover:text-red-500"
                        href={item.href}
                      >
                        {item.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:ml-auto">
              <h3 className="mb-6 text-2xl text-red-500 font-medium uppercase md:mb-9">
                Newsletter
              </h3>
              <p className="mb-6 text-xl text-white text-white/60">
                Over 25000 people have subscribed
              </p>
              <form action="#">
                <div className="relative flex flex-col mb-3 md:min-w-[22rem]">
                  <input
                    className="w-full pr-32 pl-6 py-4 rounded-[3.125rem] bg-white text-lg text-neutral-400 transition-all focus:outline-none focus:ring-4 focus:ring-red-500/40 placeholder:text-neutral-200 sm:pr-28"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <input
                    className="absolute block top-2/4 right-3 p-3 rounded-[2.5rem] border-0 bg-red-500 text-sm font-medium uppercase whitespace-nowrap -translate-y-1/2 cursor-pointer transition lg:hover:scale-105 lg:active:shadow-inner lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40  lg:will-change-transform"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
                <p className="text-sm text-white/60">We don’t sell your email and spam</p>
              </form>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex flex-col items-center flex-wrap gap-4 sm:flex-row">
              <ul className="flex flex-shrink-0 gap-4 sm:min-w-[200px]">
                {creditsLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      className="transition-colors ease-in-out duration-300 lg:hover:text-red-500"
                      href={item.href}
                    >
                      {item.linkText}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="sm:mx-auto sm:text-center">Copyright @ 2022 xpence</div>

              <ul className="flex sm:justify-end gap-4 sm:gap-3 sm:min-w-[200px]">
                {socialLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      className="text-2xl sm:text-xs transition-colors ease-in-out duration-300 lg:hover:text-red-500"
                      href={item.href}
                    >
                      {item.icon}
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
