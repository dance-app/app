import { Form, Input, Button } from '@components/ui'
import { Link, useNavigate } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import { useForm, SubmitHandler } from "react-hook-form"
import { fetchApi } from '@utils'
import { token } from '@states'

type Inputs = {
  email: string
  password: string
}

type SignInResponse = {
  data: {
    message: string,
    token: string
  }
} | {
  error: string,
  message: string,
  statusCode: number,
}


export const LoginForm = () => {
 const navigate = useNavigate()
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const mutation = useMutation({
    mutationFn: (body: Inputs) => {
      return fetchApi<SignInResponse>('auth/sign-in', {
        method: "POST",
        body
      })
        .then(response => {
          if ("data" in response && response?.data.token) {
            token.set(response.data.token)
            return
          }
          throw new Error("message" in response ? response.message : 'no-token')
        })
    },
    onSuccess: () => navigate({ to: '/members' }),
    onError: (error: unknown) => console.log('error', error),
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => mutation.mutate(data)

  return (
    <div className='flex flex-col gap-4 w-80 border border-slate-100 p-4 rounded-md bg-white'>
      <h1>Login</h1>
      <Form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input type="email" label="Email" size='sm'{...register("email")} />
        <Input type="password" label="Password" size='sm'{...register("password")} />
        <Button type="submit">
          Login
        </Button>
      </Form>
      <p className='text-sm'>
        Don't have an account yet? <Link className="hover:underline text-slate-500" to='/sign-up'>Sign up</Link>
      </p>
    </div>
  )
}
