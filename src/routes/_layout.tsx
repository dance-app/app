import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { Logo, Navigation, UserAccountAvatar } from '@components'
import { useCurrentUser, useCurrentWorkspace } from '@hooks'
import { token } from '@states'

export const Route = createFileRoute('/_layout')({
  beforeLoad: () => {
    const tokenData = token.get()
    if (!tokenData) {
      throw redirect({
        to: '/login'
      })
    }
  },
  component: LayoutUserGuard,
})

function LayoutUserGuard() {
  const { me, isLoading } = useCurrentUser()

  if (isLoading) return <p>Loading</p>

  if (!me) {
    console.warn('ME not present')
    return
  }

  return <LayoutWorkspaceGuard />
}

function LayoutWorkspaceGuard() {
  const { workspace, isLoading } = useCurrentWorkspace()

  if (isLoading) return <p>Loading</p>

  if (!workspace) {
    console.warn('WORKSPACE not found')
    return
  }

  return (
    <div className="flex h-full text-slate-600">
      <aside className="flex flex-col border-r w-60 border-slate-200">
        <div className='flex items-center justify-between border-b border-slate-100 p-4'>
          <Logo />
          <UserAccountAvatar />
        </div>
        <Navigation />
      </aside>
      <main className="max-h-screen p-4 overflow-y-auto grow bg-slate-100">
        <Outlet />
      </main>
    </div>
  )
}
