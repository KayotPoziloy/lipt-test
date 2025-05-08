import React from 'react';
import { OPERATING_MODE } from '../constants/footerConstants'

let getTimeMSToEnd = (openingTime: number, closingTime: number, currentDate: Date): number => {
    if (currentDate.getTime() >= openingTime && currentDate.getTime() <= closingTime) {
        return closingTime - currentDate.getTime();
    }
    return 0;
};

function getTimeToEnd(): string {
  const now: Date = new Date();
  const dayOfWeek: number = now.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  const { openingTime, closingTime } = isWeekend 
    ? OPERATING_MODE.weekend 
    : OPERATING_MODE.weekday;

  const time = getTimeMSToEnd(openingTime, closingTime, now);
  let endTime: Date = new Date(time);

  return `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`;
};

const useMarketCloseTimer = (): string => {
    const [time, setTime] = React.useState<string>(getTimeToEnd());
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setTime(getTimeToEnd())
      }, 1000)
  
      return () => clearInterval(interval);
    }, [])

    return time;
};

export { useMarketCloseTimer };
