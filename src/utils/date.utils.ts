import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import updateLocale from 'dayjs/plugin/updateLocale'
import localeData from 'dayjs/plugin/localeData'
import isToday from 'dayjs/plugin/isToday'

import type { Dayjs } from 'dayjs'

dayjs.extend(localeData)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  weekStart: 1,
})
dayjs.extend(weekday)
dayjs.extend(isToday)

export const date = dayjs

type getStartOfWeekParams = {
  date: Dayjs
  startDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export const getStartOfWeek = (
  date: getStartOfWeekParams['date'],
  startDay: getStartOfWeekParams['startDay'] = 0,
): Dayjs => {
  if (!dayjs(date).isValid()) throw new Error('Invalid date')
  if (startDay < 0 || startDay > 6) throw new Error('Invalid start day')
  const weekDay = date.day()
  const daysToSubtract = (weekDay - startDay + 7) % 7

  return date.subtract(daysToSubtract, 'day')
}

export const generateWeekDates = (startDate: Dayjs): Dayjs[] => {
  if (!dayjs(startDate).isValid()) throw new Error('Invalid date')
  const weekDates = [startDate]
  for (let i = 1; i < 7; i++) {
    weekDates.push(startDate.add(i, 'day'))
  }

  return weekDates
}

export const getNextWeek = (date: Dayjs): Dayjs => dayjs(date).add(1, 'week')

export const getPreviousWeek = (date: Dayjs): Dayjs =>
  dayjs(date).subtract(1, 'week')
