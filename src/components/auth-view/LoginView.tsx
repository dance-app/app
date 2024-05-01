import { LoginForm } from '@components'
import { Header } from '@components/ui/text'

export const LoginView = () => (
  <>
    <Header className="mb-4" value="Login" />
    <div>
      <LoginForm />
    </div>
  </>
)
