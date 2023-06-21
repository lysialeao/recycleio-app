import { useState } from 'react'

import { VIACEP } from '../api/viacep'

export const useRegister = () => {
  const [data, setData] = useState({
    cpf: ''
  })
  const [address, setAddres] = useState({})

  const onChangeAddress = async ({ id, value }) => {
    console.log(id, value)
    if (id === 'zip_code' && value.length === 8) {
      await VIACEP.get(`/${value}/json`)
        .then(({ data }) => setAddres((prevState) => ({
          ...prevState,
          zip_code: data?.cep,
          state: data?.uf,
          city: data.localidade,
          neighborhood: data?.bairro,
          street: data?.logradouro
        })))
        .catch((err) => {
          console.error('ops! ocorreu um erro' + err)
        })
    }
    return setAddres((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  const onChange = async ({ id, value}) => {
    setData((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(data, address)
  }

  return {
    data,
    setData,
    onChange,
    onSubmit,
    address,
    setAddres,
    onChangeAddress
  }
}