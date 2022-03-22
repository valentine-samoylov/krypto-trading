// BrandLink
import Logo from '@assets/images/svg/logo.svg'

const BrandLink = ({ className, href }) => {
  return (
    <a className={`w-[83px] h-[32px] ${className || ''}`} href={href || '#'}>
      <Logo width="100%" height="100%" />
    </a>
  )
}

export default BrandLink
