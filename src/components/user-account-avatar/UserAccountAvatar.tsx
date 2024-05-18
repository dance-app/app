import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'
import { User } from '@types'
import { useSignOut } from '@hooks'

export const UserAccountAvatar = ({ user }: { user: User }) => {
  const { signOut } = useSignOut()

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          name={user.fullName}
          size='sm'
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile" className="h-14 gap-2 pointer-events-none" textValue='profile'>
          <p className="font-semibold">Signed in as</p>
          <p className="">{user.account.email}</p>
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" textValue='logout' onClick={signOut}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
