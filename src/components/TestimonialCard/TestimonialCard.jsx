// TestimonialCard
import QuotationIcon from '@assets/images/svg/quot-mark-icon.svg'

const TestimonialCard = (props) => {
  return (
    <>
      <QuotationIcon width="5rem" height="5rem" />
      <p className="py-6 text-lg text-white/60">{props.item.authorText}</p>
      <picture className="w-12 h-12 mb-3 rounded-full object-cover opacity-80 overflow-hidden">
        <img
          className="w-full h-full"
          src={props.item.authorImgSrc}
          alt={props.item.authorName}
          loading="lazy"
        />
      </picture>
      <h3 className="text-xl font-medium">{props.item.authorName}</h3>
      <span className="text-red-500">{props.item.authorPos}</span>
    </>
  )
}

export default TestimonialCard
