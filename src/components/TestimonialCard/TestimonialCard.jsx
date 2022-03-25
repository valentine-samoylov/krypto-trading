// TestimonialCard
import QuotationIcon from '@assets/images/svg/quot-mark-icon.svg'

const TestimonialCard = (props) => {
  return (
    <article className="flex flex-col items-center h-auto px-9 py-16 rounded-xl bg-cs-primary border-2 border-red-500 text-center overflow-hidden">
      <QuotationIcon width="5rem" height="5rem" />
      <div className="flex flex-col items-center pt-6 min-h-[15.25rem]">
        <p className="mb-6 text-lg line-clamp-3 text-white/60">{props.data.authorText}</p>
        <picture className="w-12 h-12 mt-auto mb-3 rounded-full object-cover opacity-80 overflow-hidden">
          <img
            className="w-full h-full"
            src={props.data.authorImgSrc}
            alt={props.data.authorName}
            loading="lazy"
          />
        </picture>
        <h3 className="text-xl font-medium">{props.data.authorName}</h3>
        <span className="text-red-500">{props.data.authorPos}</span>
      </div>
    </article>
  )
}

export default TestimonialCard
