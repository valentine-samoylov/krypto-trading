// NavLink
const NavLink = ({ scrollToId, linkLabel }) => {
  return (
    <a className={`uppercase transition-colors lg:hover:text-red-500`} href={scrollToId}>
      {linkLabel}
    </a>
  )
}

export default NavLink
