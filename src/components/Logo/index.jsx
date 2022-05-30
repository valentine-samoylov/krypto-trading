// Logo
import { Link } from 'react-scroll'
import LogoImg from '@/assets/images/svg/logo.svg'

const Logo = ({ className }) => {
  return (
    <Link
      className={`w-[5.188rem] h-8 ${className || ''}`}
      to="heroSection"
      smooth={true}
      href="#"
      duration={1000}
    >
      <LogoImg width="100%" height="100%" />
    </Link>
  )
}

export default Logo
