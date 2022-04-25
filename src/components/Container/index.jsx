// Container
const containerProps = {
  variant: {
    default: 'container mx-auto', // max-width: 640px, 768px, 1024px, 1280px
    mobFluid: 'lg:container lg:mx-auto', // Fluid only on mobile devices
    wide: 'relative z-0 lg:max-w-[94rem] lg:mx-auto lg:px-8',
  },
}

const Container = (props) => {
  return <div className={`${containerProps.variant[props.variant]}`}>{props.children}</div>
}

Container.defaultProps = {
  variant: 'default',
}

export default Container
