import PropTypes from 'prop-types'

import { SelectButton } from 'primereact/selectbutton'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'

import { Form } from './styles'

export const LoginForm = ({ onChange, onSubmit, loading }) => {
  return (
    <Form onSubmit={onSubmit}>
      <span className="p-float-label">
        <InputText type='email' id="login" onChange={(event) => onChange({ id: 'login', value: event.target.value })} required />
        <label htmlFor="login">Login</label>
      </span>
      <span className="p-float-label">
        <Password id="password" onChange={(event) => onChange({ id: 'password', value: event.target.value })} required />
        <label htmlFor="password">Senha</label>
      </span>
      <div className="card flex justify-content-center">
        <SelectButton value={'type'} onChange={(event) => onChange({ id: 'type', value: event.value })} options={['cnpj', 'cpf']} required />
      </div>
      <Button label="Login" className="p-button-success" loading={loading} />
      <p>Não tem uma conta? registre-se</p>
    </Form>
  )
}

LoginForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool
}