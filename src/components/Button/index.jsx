// Button
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

const Button = (props) => {
  return (
    <a
      className={`${buttonProps.kind[props.kind]} ${buttonProps.variant[props.variant || '']} ${
        buttonProps.shadow[props.shadow || '']
      } ${buttonProps.general} ${buttonProps.transitions}`}
      href={props.href || '#'}
      {...props}
    ></a>
  )
}

export default Button
