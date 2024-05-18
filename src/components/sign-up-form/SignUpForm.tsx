import { Form, Input, Button } from '@components/ui'
import { Link } from '@tanstack/react-router'
// import { useMutation } from '@tanstack/react-query'

export const SignUpForm = () => {
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
      <Input type="firstName" label="First name" />
      <Input type="lastName" label="Last name" />
      <Input type="password" label="Password" />
      <Button type="submit">Sign up</Button>
    </Form>
    <Link to='/login'>Login</Link>
    </div>
  )
}
