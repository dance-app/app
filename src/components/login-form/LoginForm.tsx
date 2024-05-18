import { Form, Input, Button } from '@components/ui'
import { Link } from '@tanstack/react-router'
import { useForm, SubmitHandler } from "react-hook-form"
import { useSignIn } from '@hooks'

type Inputs = {
  email: string
  password: string
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const {signIn} = useSignIn()

  const onSubmit: SubmitHandler<Inputs> = (data) => signIn(data)

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
