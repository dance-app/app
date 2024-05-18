import type { User } from '@types'
import { fetchApi } from '@utils'
import { useQuery } from '@tanstack/react-query'

export const useCurrentUser = () => {
  const query = useQuery<User>({
    queryKey: ['me'],
    queryFn: () => fetchApi('users/me'),
  })

  return {
    me: query.data,
    isLoading: !query.isFetched || query.isLoading,
    error: query.error,
  }
}
