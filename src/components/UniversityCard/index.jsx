// UniversityCard
const UniversityCard = (props) => {
  return (
    <article className="flex gap-8">
      <picture className="w-24 h-24 rounded-lg opacity-80 flex-shrink-0 flex-grow-0 aspect-square overflow-hidden sm:w-40 sm:h-40 ">
        <img
          className="w-full h-full object-cover "
          src={props.data.imgSrc}
          alt={props.data.title}
          loading="lazy"
        />
      </picture>
      <div className="flex flex-col items-start">
        <h3 className="mb-3 text-xl font-medium md:text-2xl">{props.data.title}</h3>
        <p className="text-lg text-white/60 line-clamp-3">{props.data.text}</p>
        <a
          className="mt-auto text-lg text-red-500 transition lg:hover:underline"
          href={props.data.linkHref}
        >
          Learn more
        </a>
      </div>
    </article>
  )
}

export default UniversityCard
