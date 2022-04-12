// NavLink
const NavLink = (props) => {
  return (
    <a className={`uppercase transition-colors lg:hover:text-red-500`} href={props.scrollToId}>
      {props.linkLabel}
    </a>
  )
}

export default NavLink
