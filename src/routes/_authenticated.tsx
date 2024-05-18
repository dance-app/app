import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({context}) => {
    console.log('context', context)
    if (!context.auth) {
      throw redirect({
        to: '/login'
      })
    }
  }
})
