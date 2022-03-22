// Button
import { buttonProps } from './buttonProps'

const ButtonLink = ({ kind, variant, shadow, ...props }) => {
  return (
    <button
      className={`${buttonProps.kind[kind]} ${buttonProps.variant[variant || '']} ${
        buttonProps.shadow[shadow || '']
      } ${buttonProps.general} ${buttonProps.transitions}`}
      {...props}
    ></button>
  )
}

export default ButtonLink
