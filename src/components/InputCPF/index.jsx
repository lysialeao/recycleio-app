import InputMask from 'react-input-mask';
import { InputText } from 'primereact/inputtext'

export const InputCPF = ({ ...props }) => {
  return (
    <InputMask mask="999.999.999-99" {...props}>
      {() => (
        <>
          <InputText required {...props} />
          <label htmlFor="cpf">CPF</label>
        </>
      )
      }
    </InputMask>
  )
}
