import { RouterProvider as RouterProviderTanStack } from '@tanstack/react-router'

import { router } from '.'

export const RouterProvider = () => <RouterProviderTanStack router={router} />
