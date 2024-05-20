import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '@components'

export const Route = createFileRoute('/_public-layout/login')({
  component: () => <LoginForm/>
})
