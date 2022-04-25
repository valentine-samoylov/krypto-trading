// Heading
const Heading = (props) => {
  return (
    <h2 className="mb-5 text-4xl font-bold text-center md:text-5xl lg:text-6xl">
      {props.children}
    </h2>
  )
}

export default Heading
