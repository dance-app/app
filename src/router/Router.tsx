import {
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router'

import { LoginView } from '@components/auth-view'
import { DashboardView } from '@components/dashboard-view'
// import { ScheduleView } from '@components/schedule-view'
import { StudentsView } from '@components/students-view'
import { MainLayout } from '@components/main-layout'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootRoute = new RootRoute({ component: MainLayout })

const authLoginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/auth/login',
  component: LoginView,
})

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DashboardView,
})

// const scheduleRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: '/schedule',
//   component: ScheduleView
// })

const studentRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/students',
  component: StudentsView
})


const routeTree = rootRoute.addChildren([
  authLoginRoute,
  dashboardRoute,
  // scheduleRoute,
  studentRoute,
])

export const router = new Router({ routeTree })
