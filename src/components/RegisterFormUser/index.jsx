import PropTypes from 'prop-types'

import { Accordion, AccordionTab } from 'primereact/accordion'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

import { AddressForm } from '../AddressForm'

import { InputCPF } from '../InputCPF'

import { FORM } from '../../constants/form'

import { Row, ContentButton } from './styles'

export const RegisterFormUser = ({ onChange, onSubmit, loading, data }) => {
  return (
    <form onSubmit={onSubmit}>
      <Accordion activeIndex={0}>
        <AccordionTab header="Dados pessoais">
          <Row>
            <span className="p-float-label">
              <InputText type='text' id="name" onChange={(event) => onChange({ id: 'name', value: event.target.value })} required />
              <label htmlFor="name">Nome</label>
            </span>
            <span className="p-float-label">
              <InputText type='text' id="last_name" onChange={(event) => onChange({ id: 'last_name', value: event.target.value })} required />
              <label htmlFor="last_name">Sobrenome</label>
            </span>
            <span className="p-float-label">
              <InputCPF value={data?.cpf} type='text' id="cpf" onChange={(event) => onChange({ id: 'cpf', value: event.target.value })} required />
            </span>
          </Row>
        </AccordionTab>
        <AccordionTab header="Endereço">
          <AddressForm onChange={onChange} data={data}/>
        </AccordionTab>
        <AccordionTab header="Dados de login">
          <Row>
            <span className="p-float-label">
              <InputText type='email' id="email" onChange={(event) => onChange({ id: 'email', value: event.target.value })} required />
              <label htmlFor="email">E-mail</label>
            </span>
            <span className="p-float-label">
              <InputText value={data?.password} type='password' id="password" onChange={(event) => onChange({ id: 'password', value: event.target.value })} required />
              <label htmlFor="email">Senha</label>
            </span>
          </Row>
        </AccordionTab>
      </Accordion>
      <ContentButton>
         <Button label={FORM.REGISTER_BUTTON} className="p-button-success" loading={loading} />
      </ContentButton>
    </form>
  )
}

RegisterFormUser.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  data: PropTypes.object
}