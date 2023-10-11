import { useState, useEffect } from 'react'

import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Accordion, AccordionTab } from 'primereact/accordion'

import { checkEmail } from '../../services/login'

import { FORM } from '../../constants/form'
import { AddressForm } from '../AddressForm'

import { Container, Form, Row, ContentButton } from "./styles"

export const RegisterFormCollectionPoint = ({ onChange, onSubmit, loading, data }) => {
  const [emailExists, setEmailExists] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if(data?.email) {
      checkEmail({ email: data.email })
        .then( ({ data }) => {
          setEmailExists(data.emailAlreadyUsed);
          setEmailError(data.emailAlreadyUsed ? 'Este e-mail já foi usado!' : '');
      });
    }
  }, [data?.email]);
  return (
    <Container>
      <h2>Quer se tornar um ponto coletor?</h2>
      <h3>Juste se agora mesmo a uma rede de colaboradoes que ajudam com o descarte responsável do lixo</h3>
      <Form onSubmit={onSubmit}>
      <Accordion activeIndex={0}>
      <AccordionTab header="Dados da empresa">
        <Row>
      <span className="p-float-label">
        <InputText type='text' id="cnpj" onChange={(event) => onChange({ id: 'cnpj', value: event.target.value })} required />
        <label htmlFor="cnpj">CNPJ</label>
      </span>
      <span className="p-float-label">
        <InputText type='text' id='corporate_name' onChange={(event) => onChange({ id: 'corporate_name', value: event.target.value })} required />
        <label htmlFor="corporata_name">Razão social</label>
      </span>
      <span className="p-float-label">
      <InputText type='text' id='trade_name'onChange={(event) => onChange({ id: 'trade_name', value: event.target.value })} required />
        <label htmlFor="trade_name">Nome fantasia</label>
      </span>
      </Row>
      <Row>
      <span className="p-float-label">
      <InputText type='text' id='telephone'onChange={(event) => onChange({ id: 'telephone', value: event.target.value })} required />
        <label htmlFor="telephone">Telefone</label>
      </span>
      <span className="p-float-label">
      <InputText type='text' id='collection_days'onChange={(event) => onChange({ id: 'collection_days', value: event.target.value })} required />
        <label htmlFor="collection_days">Dias de coleta</label>
      </span>
      </Row>
      </AccordionTab>
      <AccordionTab header="Responsável por coletas">
        <Row>
          <span className="p-float-label">
            <InputText type='text' id='collection_responsible_name'onChange={(event) => onChange({ id: 'collection_responsible_name', value: event.target.value })} required />
            <label htmlFor="collection_responsible_name">Nome</label>
          </span>
          <span className="p-float-label">
            <InputText type='text' id='collection_responsible_email'onChange={(event) => onChange({ id: 'collection_responsible_email', value: event.target.value })} required />
            <label htmlFor="collection_responsible_email">E-mail</label>
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
              { emailExists && <small id="email" className="p-error block">{emailError}</small> }
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
    </Form>
    </Container>
  )
}