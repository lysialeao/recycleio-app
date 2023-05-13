import PropTypes from 'prop-types'

import { Accordion, AccordionTab } from 'primereact/accordion'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

import { FORM } from '../../constants/form'

import { Row, ContentButton } from './styles'

export const RegisterFormUser = ({ onChange, onSubmit, loading }) => {
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
              <InputText type='email' id="email" onChange={(event) => onChange({ id: 'email', value: event.target.value })} required />
              <label htmlFor="email">E-mail</label>
            </span>
            <span className="p-float-label">
              <InputText type='text' id="cpf" onChange={(event) => onChange({ id: 'cpf', value: event.target.value })} required />
              <label htmlFor="cpf">CPF</label>
            </span>
          </Row>
        </AccordionTab>
        <AccordionTab header="Endereço">
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
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
  loading: PropTypes.bool
}