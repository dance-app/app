import type { Workspace } from '@types'
import { fetchApi } from '@utils'
import { useQuery } from '@tanstack/react-query'
import { useCurrentSlug } from '@hooks'

export const useCurrentWorkspace = () => {
  const workspaceSlug = useCurrentSlug()
  const query = useQuery<{ data: Workspace }>({
    queryKey: ['current-workspace', workspaceSlug],
    queryFn: () =>
      fetchApi('workspaces/slug', {
        queryParams: {
          value: workspaceSlug,
        },
      }),
    enabled: !!workspaceSlug,
  })

  return {
    workspace: query.data?.data || null,
    isLoading: !query.isFetched || query.isLoading,
    error: query.error,
  }
}
