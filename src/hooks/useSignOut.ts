import { useNavigate } from '@tanstack/react-router'
import {token} from '@states'
import {queryClient} from '@utils'

export const useSignOut = () => {
  const navigate = useNavigate()

  return {
    signOut: () => {
      token.set(null)
      queryClient.clear()
      navigate({to: '/login'})
    }
  }
}
