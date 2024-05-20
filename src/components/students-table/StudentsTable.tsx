import { useCallback } from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  User,
  Tooltip,
  Chip,
} from '@nextui-org/react'
import { Eye, Pencil, Trash } from '@phosphor-icons/react'

import type { Key } from 'react'
import { useWorkspaceMembers } from '@hooks'

const statusColorMap = {
  active: 'success' as const,
  paused: 'danger' as const,
  vacation: 'warning' as const,
}

const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'ROLE', uid: 'role' },
  { name: 'STATUS', uid: 'status' },
  { name: 'ACTIONS', uid: 'actions' },
]

const users: {
  id: number
  name: string
  role: string
  team: string
  status: 'active' | 'paused' | 'vacation'
  age: string
  avatar: string
  email: string
}[] = [
  {
    id: 1,
    name: 'Tony Reichert',
    role: 'CEO',
    team: 'Management',
    status: 'active',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Technical Lead',
    team: 'Development',
    status: 'paused',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: 3,
    name: 'Jane Fisher',
    role: 'Senior Developer',
    team: 'Development',
    status: 'active',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: 4,
    name: 'William Howard',
    role: 'Community Manager',
    team: 'Marketing',
    status: 'vacation',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: 5,
    name: 'Kristen Copper',
    role: 'Sales Manager',
    team: 'Sales',
    status: 'active',
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
]

export const StudentsTable = () => {
  const {members}=useWorkspaceMembers()
  console.log('members', members)
  const renderCell = useCallback((user: (typeof users)[0], columnKey: Key) => {
    const cellValue = user[columnKey as keyof typeof user]

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: user.avatar }}
            description={user.email}
            name={cellValue}
          />
        )
      case 'role':
        return (
          <div className="flex flex-col">
            <p className="text-sm capitalize text-bold">{cellValue}</p>
            <p className="text-sm capitalize text-bold text-default-400">
              {user.team}
            </p>
          </div>
        )
      case 'status':
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        )
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-xs transition-all duration-300 cursor-pointer text-default-400 active:opacity-50">
                <Eye size={20} />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-xs transition-all duration-300 cursor-pointer text-default-400 active:opacity-50">
                <Pencil size={20} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-xs transition-all duration-300 cursor-pointer text-danger active:opacity-50">
                <Trash size={20} />
              </span>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Table
      classNames={{
        td: 'bg-white',
        th: 'border border-slate-300/50 first:!rounded-l-none last:!rounded-r-none',
        tbody: 'border border-slate-300/50',
      }}
      aria-label="Example table with custom cells"
      removeWrapper
    >
      <TableHeader columns={columns}>
        {column => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
            className="bg-slate-200"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody className="border rounded-md border-slate-200" items={users}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
