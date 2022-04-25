// Logo
import LogoImg from '@assets/images/svg/logo.svg'

const Logo = (props) => {
  return (
    <a className={`w-[5.188rem] h-8 ${props.className || ''}`} href={props.href || '#'}>
      <LogoImg width="100%" height="100%" />
    </a>
  )
}

export default Logo
