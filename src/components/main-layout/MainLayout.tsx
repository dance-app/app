import { Outlet } from '@tanstack/react-router'

import { Logo, Navigation } from "@components"

export const MainLayout = () => (
  <div className="h-full flex text-slate-600">
    <aside className="flex flex-col w-60 p-3 gap-1">
      <Logo />
      <Navigation />
    </aside>
    <main className='grow bg-slate-100 p-4 max-h-screen overflow-y-auto'>
      <Outlet />
    </main>
  </div>
)
