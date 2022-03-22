// ButtonLink
import { buttonProps } from './buttonProps'

const ButtonLink = ({ kind, variant, shadow, href, ...props }) => {
  return (
    <a
      className={`${buttonProps.kind[kind]} ${buttonProps.variant[variant || '']} ${
        buttonProps.shadow[shadow || '']
      } ${buttonProps.general} ${buttonProps.transitions}`}
      href={href || '#'}
      {...props}
    ></a>
  )
}

export default ButtonLink
