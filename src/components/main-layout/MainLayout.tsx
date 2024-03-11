import { Outlet } from "@tanstack/react-router";

import { Logo, Navigation } from "@components";

export const MainLayout = () => (
  <div className="flex h-full text-slate-600">
    <aside className="flex flex-col gap-1 border-r w-60 border-slate-200">
      <Logo />
      <Navigation />
    </aside>
    <main className="max-h-screen p-4 overflow-y-auto grow bg-slate-100">
      <Outlet />
    </main>
  </div>
);
