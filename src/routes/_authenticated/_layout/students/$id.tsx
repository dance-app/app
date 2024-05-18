import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_layout/students/$id')({
  component: () => <div>Hello /_authenticated/members/$id!</div>
})
