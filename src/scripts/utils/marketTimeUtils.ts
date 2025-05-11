import {
  WEEKDAY_OPEN_HOURS,
  WEEKDAY_CLOSE_HOURS,
  WEEKEND_OPEN_HOURS,
  WEEKEND_CLOSE_HOURS,
} from '../../constants/footerConstants'

export const getTimeMSToEnd = (openingTime: Date, closingTime: Date, currentDate: Date): number => {
  if (currentDate >= openingTime && currentDate <= closingTime) {
    return closingTime.getTime() - currentDate.getTime()
  }
  return 0
}

export const getTodaySchedule = (date: Date) => {
  const day = date.getDay()
  const isWeekend = day === 0 || day === 6

  const openHours = isWeekend ? WEEKEND_OPEN_HOURS : WEEKDAY_OPEN_HOURS
  const closeHours = isWeekend ? WEEKEND_CLOSE_HOURS : WEEKDAY_CLOSE_HOURS

  const openingTime = new Date(date)
  openingTime.setHours(openHours, 0, 0, 0)

  const closingTime = new Date(date)
  closingTime.setHours(closeHours, 0, 0, 0)

  return { openingTime, closingTime }
}

export const getTimeToEnd = (): string => {
  const now = new Date()

  const { openingTime, closingTime } = getTodaySchedule(now)

  const timeMS = getTimeMSToEnd(openingTime, closingTime, now)

  if (timeMS <= 0) return '00:00:00'

  const hours = Math.floor(timeMS / (1000 * 60 * 60))
  const minutes = Math.floor((timeMS % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeMS % (1000 * 60)) / 1000)

  return [hours, minutes, seconds].map((n) => n.toString().padStart(2, '0')).join(':')
}
