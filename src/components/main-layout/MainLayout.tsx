import { Outlet } from '@tanstack/react-router'

import { Logo, Navigation } from "@components"

export const MainLayout = () => {
  return (
    <div className="h-full flex text-slate-600">
      <aside className="flex flex-col w-60 bg-slate-100 p-3 gap-1">
        <Logo />
        <Navigation />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
