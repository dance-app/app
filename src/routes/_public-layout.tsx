import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public-layout')({
  component: () => (
    <main className="w-full h-full flex justify-center items-center bg-slate-100">
      <Outlet />
    </main>
  ),
})
