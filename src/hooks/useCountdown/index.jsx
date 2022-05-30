// useCountdown
import { useEffect, useState } from 'react'

const useCountdown = (countdownTarget) => {
  const targetTime = new Date(countdownTarget).getTime()

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

  return { seconds, minutes, hours, days, hours }
}

export default useCountdown
