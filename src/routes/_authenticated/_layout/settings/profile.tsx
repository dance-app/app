import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_layout/settings/profile')({
  component: () => <div>Hello /_authenticated/profile!</div>
})