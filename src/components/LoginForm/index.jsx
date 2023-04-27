import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'

import { Form } from './styles'

export const LoginForm = () => {
  return (
    <Form>
      <span className="p-float-label">
        <InputText type='email' id="login"/>
        <label htmlFor="login">Login</label>
      </span>
      <span className="p-float-label">
        <Password id="password"/>
        <label htmlFor="password">Password</label>
      </span>
      <Button label="Login" className="p-button-success" loading={false}/>
      <p>Não tem uma conta? registre-se</p>
    </Form>
  )
}