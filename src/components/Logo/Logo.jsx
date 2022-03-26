// BrandLink
import LogoImg from '@assets/images/svg/logo.svg'

const Logo = ({ className, href }) => {
  return (
    <a className={`w-[5.188rem] h-8 ${className || ''}`} href={href || '#'}>
      <LogoImg width="100%" height="100%" />
    </a>
  )
}

export default Logo
