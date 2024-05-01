import dayjs from 'dayjs'
import { expect, describe, it } from 'vitest'

import { getStartOfWeek, generateWeekDates } from './date.utils'

describe('getStartOfWeek', () => {
  it('should return the same date if input is Sunday', () => {
    const sundayDate = dayjs('2023-10-15')
    expect(getStartOfWeek(sundayDate).toISOString()).toBe(
      sundayDate.toISOString(),
    )
  })

  it('should return the start of the week (Sunday by default) for other days', () => {
    const tuesdayDate = dayjs('2023-10-17')
    const expectedSunday = dayjs('2023-10-15')
    expect(getStartOfWeek(tuesdayDate).toISOString()).toBe(
      expectedSunday.toISOString(),
    )
  })

  it('should return the start of the week (Monday) for other days', () => {
    const tuesdayDate = dayjs('2023-10-17')
    const expectedMonday = dayjs('2023-10-16')
    expect(getStartOfWeek(tuesdayDate, 1).toISOString()).toBe(
      expectedMonday.toISOString(),
    )
  })

  it('should throw an error for invalid input', () => {
    const invalidDate = '2023-10-XX'
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => getStartOfWeek(invalidDate)).toThrow('Invalid date')
  })

  it('should allow users to specify a custom start day (e.g., Saturday)', () => {
    const wednesdayDate = dayjs('2023-10-18')
    const expectedSaturday = dayjs('2023-10-14')
    expect(getStartOfWeek(wednesdayDate, 6).toISOString()).toBe(
      expectedSaturday.toISOString(),
    )
  })
})

describe('generateWeekDates', () => {
  it('should return an array of 7 dates with the given date as the first element', () => {
    const startDate = dayjs('2023-10-15') // Start date (Sunday)
    const expectedDates = [
      startDate,
      startDate.add(1, 'day'),
      startDate.add(2, 'day'),
      startDate.add(3, 'day'),
      startDate.add(4, 'day'),
      startDate.add(5, 'day'),
      startDate.add(6, 'day'),
    ]

    const weekDates = generateWeekDates(startDate)
    const output = weekDates.map(d => d.toISOString()).toString()
    const expected = expectedDates.map(d => d.toISOString()).toString()
    expect(output).toBe(expected)
  })

  it('should throw an error for an invalid start date', () => {
    const invalidDate = '2023-10-XX'
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => generateWeekDates(invalidDate)).toThrow('Invalid date')
  })
})
