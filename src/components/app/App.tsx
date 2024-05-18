import { NextUIProvider } from '@nextui-org/react'
import { Provider as StateProvider } from 'jotai'

import { QueryProvider } from '@utils'
import { store } from '@states'

import './App.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '../../routeTree.gen'

const router = createRouter({ routeTree, context: { auth: undefined! } })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export const App = () => (
  <QueryProvider>
    <NextUIProvider>
      <StateProvider store={store}>
        <AuthRouter />
      </StateProvider>
    </NextUIProvider>
  </QueryProvider>
)

const AuthRouter = () => {
  return <RouterProvider router={router} context={{ auth: null }} />
}
