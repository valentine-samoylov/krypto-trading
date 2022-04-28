// Nav
import { useState, useEffect, useRef } from 'react'
import useOnClickOutside from '@hooks/useOnClickOutside'
import LangSwitcher from '@components/LangSwitcher'
import NavLink from '@components/NavLink'
import { navLinks } from '@data'
import MenuOpen from '@assets/images/svg/ui-menu-open.svg'
import MenuClose from '@assets/images/svg/ui-menu-close.svg'

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
    <nav className="flex items-center w-full" ref={navRef} role="navigation">
      <div className="flex ml-auto pl-[0.563rem] lg:order-2 lg:ml-0">
        <LangSwitcher />

        <button
          type="button"
          className={`relative z-[52] inline-flex items-center ml-4 p-2 text-xl ${
            navIsOpen ? 'bg-red-500' : ''
          } rounded-lg border-2 border-red-500 transition-colors lg:hidden`}
          onClick={toggleNav}
        >
          {navIsOpen ? <MenuClose /> : <MenuOpen />}
        </button>
      </div>

      <menu
        className={`fixed top-0 right-0 w-full bg-navy rounded-b-xl shadow-md will-change-transform transition-transform duration-500 lg:static lg:w-auto lg:order-0 lg:h-auto lg:mx-auto lg:rounded-none lg:shadow-none lg:translate-y-0 ${
          navIsOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container">
          <ul className="flex flex-col pt-16 pb-8 divide-y divide-white/20 lg:flex-row lg:gap-2 lg:max-w-none lg:p-0 lg:divide-none">
            {navLinks.map(({ scrollToId, linkLabel }, idx) => (
              <li className="py-4 px-4 lg:px-6 lg:py-0" key={idx}>
                <NavLink scrollToId={scrollToId} linkLabel={linkLabel} />
              </li>
            ))}
          </ul>
        </div>
      </menu>
    </nav>
  )
}

export default Nav
