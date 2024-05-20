import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/$workspace-slug/students/$id')({
  component: () => <div>Hello /_authenticated/members/$id!</div>
})
