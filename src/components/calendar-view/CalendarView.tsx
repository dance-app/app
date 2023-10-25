import { useState, useMemo, MouseEvent } from 'react'
import {
  date,
  generateWeekDates,
  getStartOfWeek,
  getNumberArray,
  getNextWeek,
  getPreviousWeek
} from '@utils';
// import { useEvents } from '@hooks';
import type { Dayjs } from 'dayjs';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { Button } from '@components/ui';

type GoToParams = {
  when: 'today' | 'next-week' | 'previous-week'
}

const hoursArray = getNumberArray(24)

export const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(date());
  const startOfWeek = useMemo(() => getStartOfWeek(currentDate, 1), [currentDate])
  const weekDays = useMemo(() => generateWeekDates(startOfWeek), [startOfWeek])
  // const { events } = useEvents({ startDate: startOfWeek, endDate: [...weekDays].pop() as Dayjs })
  // console.log('events', events)

  const goTo = (e: MouseEvent<HTMLButtonElement>, when: GoToParams['when']) => {
    e.stopPropagation()
    e.preventDefault()
    if (when === 'today') return setCurrentDate(date())
    const newDate = when === 'next-week'
      ? getNextWeek(currentDate)
      : getPreviousWeek(currentDate)
    setCurrentDate(newDate)
  }

  const columns = [undefined, ...weekDays]

  return (
    <div className="w-full h-full">
      <Button onClick={e => goTo(e, 'today')}>
        Today
      </Button>
      <Button onClick={e => goTo(e, 'previous-week')} isIconOnly>
        <BsArrowLeftShort />
      </Button>
      <Button onClick={e => goTo(e, 'next-week')} isIconOnly>
        <BsArrowRightShort />
      </Button>
      <div className="w-full grid grid-cols-8 bg-red-300">
        {columns.map(date => <Column key={`column-${date?.toISOString()}`} date={date} />)}

        {/* <tbody className='overflow-y-auto'>
          {hoursArray.map(number => (
            <tr key={`hour-row-${number}`}>
              <td className="border-solid border-1 border-slate-600 h-14">{number}</td>
              {weekDays.map((_d, i) => {
                return (
                  <td key={`${number}-${i}`} className="border-solid border-1 border-slate-600 h-14">
                    {number}

                  </td>)
              })}
            </tr>
          ))}
        </tbody> */}
      </div>
    </div>
  )
}

type ColumnProps = {
  date?: Dayjs
}

const Column = ({ date }: ColumnProps) => {
  const isFirstColumn = !date
  return (
    <div className="relative">
      <ColumnHeader date={date} />
      {hoursArray.map(hour => (
        <Cell
          key={`cell-${hour}`}
          hour={hour}
          isHoursShown={isFirstColumn}
        />
      ))}
    </div>
  )
}

type ColumnHeaderProps = ColumnProps

const ColumnHeader = ({ date }: ColumnHeaderProps) => {
  return (
    <div className="border-solid border-1 border-slate-600">
      {date?.format('ddd D') || 'void'}
    </div>
  )
}

type CellProps = {
  isHoursShown: boolean,
  hour: number
}

const Cell = ({ isHoursShown, hour }: CellProps) => {
  return (
    <div className="h-16 border-solid border-1 border-slate-600">
      {isHoursShown ? hour : null}
    </div>
  )
}
