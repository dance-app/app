import { Form, Input, Button } from '@components/ui'

export const LoginForm = () => {
  return (
    <Form>
      <Input type="email" label="Email" />
      <Input type="password" label="Password" />
      <Button type="submit">Login</Button>
    </Form>
  )
}
