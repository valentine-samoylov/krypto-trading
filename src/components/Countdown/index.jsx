// Countdown
import useCountdown from '@/hooks/useCountdown'

const Countdown = ({ data }) => {
  const { seconds, minutes, hours, days } = useCountdown(data.newTargetDate)

  const countdownTime = [{ time: days }, { time: hours }, { time: minutes }, { time: seconds }]

  const countdownData = data.display.map((item, idx) => ({
    ...item,
    ...countdownTime[idx],
  }))

  return (
    <>
      <p className="mb-6 text-lg">{data.tagLine}</p>

      <ul className="flex mb-10 px-10 py-2 bg-navy/50 rounded-[5rem]">
        {countdownData.map((item, idx) => (
          <li
            className="flex items-center after:content-[':'] after:p-[2px] last:after:content-none"
            key={idx}
          >
            <div className="flex flex-col items-center px-2">
              <time className="text-red-500 text-3xl font-medium">{item.time}</time>
              <span className="text-xs uppercase">{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Countdown
