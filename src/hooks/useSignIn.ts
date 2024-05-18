import { fetchApi } from '@utils'
import { useNavigate } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'

import { token } from '@states'

type Inputs = {
  email: string
  password: string
}

type SignInResponse =
  | {
      data: {
        message: string
        token: string
      }
    }
  | {
      error: string
      message: string
      statusCode: number
    }

export const useSignIn = () => {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: (body: Inputs) => {
      return fetchApi<SignInResponse>('auth/sign-in', {
        method: 'POST',
        body,
      }).then(response => {
        if ('data' in response && response?.data.token) {
          token.set(response.data.token)
          return
        }
        throw new Error('message' in response ? response.message : 'no-token')
      })
    },
    onSuccess: () => navigate({ to: '/students' }),
    onError: (error: unknown) => console.log('error', error),
  })

  return {
    signIn: mutation.mutate,
  }
}
