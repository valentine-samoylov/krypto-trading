// Header
import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Logo from '@/components/Logo'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const offsetY = window.scrollY
    if (offsetY >= 80) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', () => handleScroll)
      }
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-3 bg-navy text-white transition-shadow duration-500 md:py-4 lg:py-8 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container">
        <div className="flex items-center mx-auto">
          <Logo className="flex-shrink-0" />
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header
