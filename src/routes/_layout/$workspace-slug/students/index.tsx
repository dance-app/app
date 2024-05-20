import { createFileRoute } from '@tanstack/react-router'
import { StudentsView } from '@components'

export const Route = createFileRoute('/_layout/$workspace-slug/students/')({
  component: ()=> <StudentsView/>,
})
