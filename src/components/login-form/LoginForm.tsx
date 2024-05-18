import { Form, Input, Button } from '@components/ui'
import { Link } from '@tanstack/react-router'
// import { useMutation } from '@tanstack/react-query'

export const LoginForm = () => {
  // const muration = useMutation({
  //   mutationFn: ()=> {},
  //   onSuccess: () => {
  //     // todo
  //   },
  // })
  return (
    <div>
    <Form>
      <Input type="email" label="Email" />
      <Input type="password" label="Password" />
      <Button type="submit">Login</Button>
    </Form>
    <Link to='/sign-up'>Sign up</Link>
    </div>
  )
}
