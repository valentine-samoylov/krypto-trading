// BlogCard
const BlogCard = (props) => {
  return (
    <article className="flex gap-8">
      <picture className="w-24 h-24 rounded-lg opacity-80 flex-shrink-0 flex-grow-0 aspect-square overflow-hidden sm:w-40 sm:h-40 ">
        <img
          className="w-full h-full object-cover "
          src={props.item.imgSrc}
          alt={props.item.title}
          loading="lazy"
        />
      </picture>
      <div className="flex flex-col items-start">
        <h3 className="mb-3 text-xl font-medium md:text-2xl">{props.item.title}</h3>
        <p className="text-lg text-white/60 line-clamp-3">{props.item.text}</p>
        <a
          className="mt-auto text-lg text-red-500 hover:scale-105 transition ease-in-out duration-300"
          href={props.item.linkHref}
        >
          Learn more
        </a>
      </div>
    </article>
  )
}

export default BlogCard
