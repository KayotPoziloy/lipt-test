import React from 'react';
import { 
  WEEKDAY_OPEN_HOURS,
  WEEKDAY_CLOSE_HOURS,
  WEEKEND_OPEN_HOURS,
  WEEKEND_CLOSE_HOURS
} from '../constants/footerConstants';

// возвращает время до конца в мс
let getTimeMSToEnd = (openingTime: Date, closingTime: Date, currentDate: Date): number => {
  if (currentDate >= openingTime && currentDate <= closingTime) {
    return closingTime.getTime() - currentDate.getTime();
  };
  return 0;
};

// возвращает расписание
const getTodaySchedule = (date: Date) => {
  const day: number = date.getDay();
  const isWeekend = day === 0 || day === 6;

  const openHours = isWeekend ? WEEKEND_OPEN_HOURS : WEEKDAY_OPEN_HOURS;
  const closeHours = isWeekend ? WEEKEND_CLOSE_HOURS : WEEKDAY_CLOSE_HOURS;

  const openingTime: Date = new Date(date);
  openingTime.setHours(openHours, 0, 0, 0);

  const closingTime: Date = new Date(date);
  closingTime.setHours(closeHours, 0, 0, 0);

  return { openingTime, closingTime };

}

// Возвращает время до закрытия в нормальном виде
function getTimeToEnd(): string {
  const now: Date = new Date();

  const { openingTime, closingTime } = getTodaySchedule(now);

  const timeMS: number = getTimeMSToEnd(openingTime, closingTime, now);

  if (timeMS <= 0) {
    return "00:00:00";
  };

  // Преобразуем миллисекунды в часы, минуты, секунды
  const hours = Math.floor(timeMS / (1000 * 60 * 60));
  const minutes = Math.floor((timeMS % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeMS % (1000 * 60)) / 1000);

  // Форматируем с ведущими нулями
  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');
};

const useMarketCloseTimer = (): string => {
    const [time, setTime] = React.useState<string>(getTimeToEnd());
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setTime(getTimeToEnd());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return time;
};

export { useMarketCloseTimer };
