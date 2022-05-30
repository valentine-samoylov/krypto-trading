// Button
import { Link } from 'react-scroll'

const buttonProps = {
  kind: {
    primary: 'bg-red-500',
    secondary: 'bg-navy/50 border-2 border-red-500',
    download: 'py-[2px] rounded-[0.625rem] bg-black border-2 border-white overflow-hidden',
  },
  variant: {
    lg: 'px-5 py-3 rounded-[3rem] border-2 border-red-500 sm:px-6 sm:py-4',
  },
  shadow: {
    xl: 'shadow-xl',
  },
  general: 'font-bold text-center uppercase whitespace-nowrap will-change-transform',
  transitions:
    'transition lg:hover:scale-105 lg:active:shadow-inner lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40',
}

const Button = ({ as, kind, variant, shadow, href, to, children, ...props }) => {
  return (
    <>
      {as === 'anchor' ? (
        <Link
          className={`${buttonProps.kind[kind]} ${buttonProps.variant[variant || '']} ${
            buttonProps.shadow[shadow || '']
          } ${buttonProps.general} ${buttonProps.transitions}`}
          href="#"
          to={to}
          smooth={true}
          offset={-64}
          duration={1000}
        >
          {children}
        </Link>
      ) : (
        <a
          className={`${buttonProps.kind[kind]} ${buttonProps.variant[variant || '']} ${
            buttonProps.shadow[shadow || '']
          } ${buttonProps.general} ${buttonProps.transitions}`}
          href={href || '#'}
          {...props}
        >
          {children}
        </a>
      )}
    </>
  )
}

export default Button
