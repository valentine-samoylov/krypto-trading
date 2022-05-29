// Container
const containerProps = {
  variant: {
    default: 'container mx-auto', // max-width: 640px, 768px, 1024px, 1280px
    mobFluid: 'lg:container lg:mx-auto', // Fluid only on mobile devices
  },
}

const Container = ({ variant, children }) => {
  return <div className={`${containerProps.variant[variant]}`}>{children}</div>
}

Container.defaultProps = {
  variant: 'default',
}

export default Container
