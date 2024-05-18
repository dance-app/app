import { createFileRoute, redirect } from '@tanstack/react-router'
import { token } from '@states'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    const tokenData = token.get()
    if (!tokenData) {
      throw redirect({
        to: '/login'
      })
    }
  }
})

