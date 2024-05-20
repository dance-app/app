import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'
import { useCurrentUser, useSignOut } from '@hooks'

export const UserAccountAvatar = () => {
  const { me } = useCurrentUser()
  const { signOut } = useSignOut()

  if (!me) return null

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          name={me.fullName}
          size='sm'
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile" className="h-14 gap-2 pointer-events-none" textValue='profile'>
          <p className="font-semibold">Signed in as</p>
          <p className="">{me.account.email}</p>
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" textValue='logout' onClick={signOut}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
