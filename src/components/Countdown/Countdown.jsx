// Countdown
import { useEffect, useState } from 'react'

const targetTime = new Date('2022-05-05').getTime()

const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(Date.now())

  const timeBetween = targetTime - currentTime
  const seconds = Math.floor((timeBetween / 1000) % 60)
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60)
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24)
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const countdownData = [
    { countdownNum: days, countdownText: 'days' },
    { countdownNum: hours, countdownText: 'hours' },
    { countdownNum: minutes, countdownText: 'minutes' },
    { countdownNum: seconds, countdownText: 'seconds' },
  ]

  return (
    <ul className="flex mb-10 px-10 py-2 bg-cs-primary/50 rounded-[5rem]">
      {countdownData.map((item, idx) => (
        <li
          className="flex items-center after:content-[':'] after:p-[2px] last:after:content-none"
          key={idx}
        >
          <div className="flex flex-col items-center px-2">
            <time className="text-red-500 text-3xl font-medium">{item.countdownNum}</time>
            <span className="text-xs uppercase">{item.countdownText}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Countdown
