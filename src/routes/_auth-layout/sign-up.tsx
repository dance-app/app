import { createFileRoute } from '@tanstack/react-router'
import { SignUpForm } from '@components'

export const Route = createFileRoute('/_auth-layout/sign-up')({
  component: () => <SignUpForm />
})
