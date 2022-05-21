// CryptoCard
import Button from '@/components/Button'

const CryptoCard = (props) => {
  return (
    <article className="h-auto rounded-xl overflow-hidden">
      <div className="ol-blend-overlay">
        <img
          className="aspect-4/3 w-full object-cover lg:aspect-square"
          src={props.data.imgSrc}
          alt={props.data.title}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col min-h-[16rem] p-4 bg-white sm:min-h-[18.75rem] sm:p-6">
        <h3 className="mb-3 text-2xl font-medium text-black">{props.data.title}</h3>
        <p className="text-lg text-black/60 line-clamp-3">{props.data.text}</p>
        <div className="flex flex-col justify-between gap-4 mt-auto pt-6 xl:flex-row xl:items-center">
          <span className="text-2xl font-bold text-red-500 sm:text-3xl xl:text-4xl">
            {props.data.price ? `$${props.data.price}` : 'loading...'}
          </span>
          <Button kind="primary" variant="lg">
            Trade now
          </Button>
        </div>
      </div>
    </article>
  )
}
export default CryptoCard
