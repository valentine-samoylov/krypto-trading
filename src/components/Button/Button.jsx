// Button
import { buttonProps } from './buttonProps'

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
