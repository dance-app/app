// import { currentUser } from '@states';
import type { User } from '@types'
import { useState } from 'react'

type UseCurrentUser = () => {
  me: User | null
  isLoading: boolean
  error: string | null
}

export const useCurrentUser: UseCurrentUser = () => {
  // const [value] = useAtom<User | null>(currentUser);
  const [isLoading] = useState(true)
  const [error] = useState(null)

  return {
    me: null,
    isLoading,
    error,
  }
}
