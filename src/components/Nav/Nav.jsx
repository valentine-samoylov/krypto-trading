// Nav
import { useState, useEffect, useRef } from 'react'
import useOnClickOutside from '@hooks/useOnClickOutside'
import MenuOpen from '@assets/images/svg/ui-menu-open.svg'
import MenuClose from '@assets/images/svg/ui-menu-close.svg'

const navLinks = [
  { navText: 'How it works', navHref: '#' },
  { navText: 'Cryptos', navHref: '#' },
  { navText: 'Features', navHref: '#' },
  { navText: 'Testimonial', navHref: '#' },
  { navText: 'University', navHref: '#' },
]

const Nav = () => {
  const [navIsOpen, setNavOpen] = useState(false)
  const navRef = useRef()
  useOnClickOutside(navRef, () => setNavOpen(false))

  const toggleNav = () => {
    setNavOpen(!navIsOpen)
  }

  const collapseNav = () => {
    setNavOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', collapseNav)
    window.addEventListener('resize', collapseNav)

    return () => {
      window.removeEventListener('scroll', () => collapseNav)
      window.removeEventListener('resize', () => collapseNav)
    }
  }, [])

  return (
    <nav className="flex w-full lg:w-auto lg:mx-auto" ref={navRef} role="navigation">
      <button
        type="button"
        className="relative z-[52] inline-flex items-center ml-auto p-2 text-xl rounded-lg lg:hidden hover:bg-red-500 active:shadow-inner focus:ring-2 focus:ring-red-500/40"
        onClick={toggleNav}
      >
        {navIsOpen ? <MenuClose /> : <MenuOpen />}
      </button>

      <menu
        className={`fixed top-0 right-0 w-full bg-cs-primary rounded-b-xl shadow-md transition-transform ease-in duration-500 lg:static lg:w-auto lg:h-auto lg:rounded-none lg:shadow-none lg:translate-y-0 ${
          navIsOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container">
          <ul className="flex flex-col pt-16 pb-8 divide-y divide-white/20 lg:flex-row lg:gap-2 lg:max-w-none lg:p-0 lg:divide-none">
            {navLinks.map((item, idx) => (
              <li className="py-4 px-4 lg:px-6 lg:py-0" key={idx}>
                <a
                  className="uppercase hover:text-red-500 hover:scale-105 transition ease-in-out duration-150"
                  href={item.navHref}
                >
                  {item.navText}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </menu>
    </nav>
  )
}

export default Nav
