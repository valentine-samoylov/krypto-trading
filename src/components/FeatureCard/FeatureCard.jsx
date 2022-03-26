// FeatureCard
const FeatureCard = (props) => {
  return (
    <article className="max-w-[25rem] md:max-w-none">
      <div className="flex flex-col items-center gap-4 mb-4 md:flex-row md:items-start md:gap-8 md:mb-6">
        {props.data.featureIcon}
        <h3 className="text-2xl font-medium text-center md:text-3xl md:text-left">
          {props.data.featureTitle}
        </h3>
      </div>
      <p className="text-xl text-center text-white/60 line-clamp-3 md:text-2xl md:text-left">
        {props.data.featureDescr}
      </p>
    </article>
  )
}

export default FeatureCard
