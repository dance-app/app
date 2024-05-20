import { createFileRoute } from '@tanstack/react-router'
import { SignUpForm } from '@components'

export const Route = createFileRoute('/_public-layout/sign-up')({
  component: () => <SignUpForm />
})
