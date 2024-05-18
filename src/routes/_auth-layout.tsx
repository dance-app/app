import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-layout')({
  component: () => (
    <main className="w-full h-full flex justify-center items-center">
      <Outlet />
    </main>
  ),
})
