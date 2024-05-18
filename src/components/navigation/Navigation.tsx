import { Link } from '@tanstack/react-router'
import { AppWindow, Gear } from '@phosphor-icons/react'

export const Navigation = () => {
  return (
    <nav className='flex flex-col justify-between flex-1 p-4'>
      <ul className="flex flex-col gap-1">
          <Link
            to='/members'
            className="text-sm transition-all duration-300 text-center text-slate-500 rounded-md border border-transparent
            flex items-center gap-1 w-[200px] mx-auto [&.active]:bg-slate-100 [&.active]:border-slate-200 p-2 hover:bg-slate-50 focus:bg-slate-100"
          >
            <AppWindow
              size={18}
              weight="duotone"
              className="text-2xl text-slate-500"
            />
            Members
          </Link>
      </ul>
      <ul className="flex flex-col gap-1 border-t border-slate-200 pt-4">
          <Link
            to='/settings/profile'
            className="text-sm transition-all duration-300 text-center text-slate-500 rounded-md border border-transparent
            flex items-center gap-1 w-[200px] mx-auto [&.active]:bg-slate-100 [&.active]:border-slate-200 p-2 hover:bg-slate-50 focus:bg-slate-100"
          >
            <Gear
              size={18}
              weight="fill"
              className="text-2xl text-slate-500"
            />
            Settings
          </Link>
      </ul>
    </nav>
  )
}
