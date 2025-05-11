import { useEffect, useState } from 'react'
import { getTimeToEnd } from '../utils/marketTimeUtils'

const useMarketCloseTimer = (): string => {
  const [time, setTime] = useState<string>(getTimeToEnd())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeToEnd())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return time
}

export { useMarketCloseTimer }
