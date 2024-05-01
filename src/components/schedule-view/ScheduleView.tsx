import { CalendarView } from '@components'
import { Header } from '@components/ui/text'

export const ScheduleView = () => (
  <>
    <Header className="mb-4" value="Schedule" />
    <section>
      <CalendarView />
    </section>
  </>
)
