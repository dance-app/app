import type { Workspace } from '@types'
import { fetchApi } from '@utils'
import { useQuery } from '@tanstack/react-query'
import { useCurrentSlug } from '@hooks'

export const useWorkspaceMembers = () => {
  const workspaceSlug = useCurrentSlug()
  const query = useQuery<{data: Workspace}>({
    queryKey: ['workspace-members', workspaceSlug],
    queryFn: () =>
      fetchApi('workspaces/members', {
        queryParams: {
          value: workspaceSlug,
        },
      }),
    enabled: !!workspaceSlug,
  })

  return {
    members: query.data?.data || [],
    isLoading: !query.isFetched || query.isLoading,
    error: query.error,
  }
}
