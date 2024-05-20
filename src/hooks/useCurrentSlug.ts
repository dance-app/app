import { useParams } from '@tanstack/react-router'

export const useCurrentSlug = () => {
  const params = useParams({ strict: false })
  const workspaceSlug =
    'workspace-slug' in params ? params['workspace-slug'] : ''

  return workspaceSlug
}
