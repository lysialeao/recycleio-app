import PropTypes from 'prop-types'
import { InputText } from 'primereact/inputtext'

import { useRegister } from '../../hooks/useRegister'

import { Row } from './styles'

export const AddressForm = () => {
  const { address, onChangeAddress } = useRegister()
  return (
    <>
      <Row>
        <span className="p-float-label">
          <InputText type='text' id="zip_code" onChange={(event) => onChangeAddress({ id: 'zip_code', value: event.target.value })} value={address.zip_code}required maxlength="8" minlength="8"/>
          <label htmlFor="zip_code">CEP</label>
        </span>
        <span className="p-float-label">
          <InputText type='text' id="state" onChange={(event) => onChangeAddress({ id: 'state', value: event.target.value })} value={address.state} required />
          <label htmlFor="state">Estado</label>
        </span>
        <span className="p-float-label">
          <InputText type='text' id="city" onChange={(event) => onChangeAddress({ id: 'city', value: event.target.value })} value={address.city}required />
          <label htmlFor="zip_code">Cidade</label>
        </span>
      </Row>
      <Row>
        <span className="p-float-label">
          <InputText type='text' id="neighborhood" onChange={(event) => onChangeAddress({ id: 'neighborhood', value: event.target.value })} initialvalue={address.neighborhood} required />
          <label htmlFor="neighborhood">Bairro</label>
        </span>
        <span className="p-float-label">
          <InputText type='text' id="street" onChange={(event) => onChangeAddress({ id: 'street', value: event.target.value })} initialvalue={address.street} required />
          <label htmlFor="street">Logradouro</label>
        </span>
        <span className="p-float-label">
          <InputText type='text' id="number" onChange={(event) => onChangeAddress({ id: 'number', value: event.target.value })} initialvalue={address.number} required />
          <label htmlFor="number">Número</label>
        </span>
      </Row>
    </>
  )
}

AddressForm.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.object
}