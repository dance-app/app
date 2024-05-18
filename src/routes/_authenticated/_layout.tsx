import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Logo, Navigation, UserAccountAvatar } from '@components'
import { useCurrentUser } from '@hooks'

export const Route = createFileRoute('/_authenticated/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const { me, isLoading } = useCurrentUser()

  if (isLoading) return <p>Loading</p>

  if (!me) {
    console.warn('ME not present')
    return
  }

  return (
    <div className="flex h-full text-slate-600">
      <aside className="flex flex-col border-r w-60 border-slate-200">
        <div className='flex items-center justify-between border-b border-slate-100 p-4'>
          <Logo />
          <UserAccountAvatar user={me}/>
        </div>
        <Navigation />
      </aside>
      <main className="max-h-screen p-4 overflow-y-auto grow bg-slate-100">
        <Outlet />
      </main>
    </div>
  )
}
