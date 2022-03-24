// CryptoCard
import ButtonLink from '@components/Button/ButtonLink'

const CryptoCard = (props) => {
  const price = props.item.cryptoPrice

  return (
    <article className="h-auto rounded-xl overflow-hidden">
      <div className="ol-blend-overlay">
        <img
          className="aspect-4/3 w-full max-h-auto object-cover lg:aspect-square"
          src={props.item.imgSrc}
          alt={props.item.title}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col min-h-[16rem] p-6 bg-white sm:min-h-[18.75rem]">
        <h3 className="mb-3 text-2xl font-medium text-black">{props.item.title}</h3>
        <p className="text-lg text-black/60 line-clamp-3">{props.item.text}</p>
        <div className="flex flex-col justify-between gap-4 mt-auto pt-6 xl:flex-row xl:items-center">
          <span className="text-2xl font-bold text-red-500 sm:text-3xl xl:text-4xl">
            {price ? `$${price}` : 'loading...'}
          </span>
          <ButtonLink kind="primary" variant="lg">
            Trade now
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}
export default CryptoCard
