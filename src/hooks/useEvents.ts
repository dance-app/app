import { useQuery } from '@tanstack/react-query'
import type { Event } from '@types'
import type { Dayjs } from 'dayjs'

type UseEvents = (params: { startDate: Dayjs; endDate: Dayjs }) => {
  events: Event[] | undefined
  isLoading: boolean
  error: unknown
}

type QueryData = {
  events: Event[]
}

const mockEventData: Event[] = [
  {
    id: 1,
    title: 'One-time Event',
    description: 'A one-time event on a specific date and time',
    dateStart: new Date('2023-10-16T10:30:00'),
    dateEnd: new Date('2023-10-16T11:30:00'),
    location: 'Event Location 1',
    timezone: 'America/New_York',
    recurrenceRule: null,
  },
  {
    id: 2,
    title: 'Recurring Weekly Event',
    description: 'A recurring weekly event on multiple days of the week',
    dateStart: new Date('2023-10-20T09:00:00'),
    dateEnd: new Date('2023-10-20T10:00:00'),
    location: 'Event Location 2',
    timezone: 'America/Los_Angeles',
    recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
  },
  {
    id: 3,
    title: 'Monthly Event',
    description: 'A monthly event on a specific day of the month',
    dateStart: new Date('2023-10-17T14:00:00'),
    dateEnd: new Date('2023-10-17T15:00:00'),
    location: 'Event Location 3',
    timezone: 'Europe/London',
    recurrenceRule: 'FREQ=MONTHLY;BYMONTHDAY=10',
  },
  {
    id: 4,
    title: 'Yearly Event',
    description: 'A yearly event on a specific day and month',
    dateStart: new Date('2023-10-22T12:00:00'),
    dateEnd: new Date('2023-10-22T13:00:00'),
    location: 'Event Location 4',
    timezone: 'Asia/Tokyo',
    recurrenceRule: 'FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=25',
  },
  {
    id: 5,
    title: 'Recurring Event with Time',
    description: 'A recurring event with a specific start and end time',
    dateStart: new Date('2023-10-18T15:00:00'),
    dateEnd: new Date('2023-10-18T17:00:00'),
    location: 'Event Location 5',
    timezone: 'UTC',
    recurrenceRule: 'FREQ=WEEKLY;BYDAY=SA',
  },
]

export const useEvents: UseEvents = params => {
  const query = useQuery<QueryData>({
    queryKey: [params.startDate.toISOString(), params.endDate.toISOString()],
    queryFn: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ events: mockEventData })
        }, 500)
      })
    },
  })

  return {
    events: query.data?.events,
    isLoading: query.isLoading,
    error: query.error,
  }
}
