import { useState, useRef } from 'react'
import { redirect } from "react-router-dom";

import { insertUser, insertCollectionPoint } from '../services/register'

export const useRegister = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(null)
  const toast = useRef(null);

  const error = () => toast.current.show({ severity: 'warn', summary: 'Algo deu errado', detail: 'Vamos tentar novamente?', life: 3000 });

  const success = () => toast.current.show({ severity: 'info', summary: 'Sucesso', detail: 'Perfil cadastrado! Faça login agora', life: 3000 });

  const onChange = async ({ id, value }) => {
    setData((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  const onRegisterPerson = async () => {

    setLoading(true)

    const { cpf, name: first_name, last_name, email, password, zip_code, state, city, neighborhood, street, number } = data

    const body = {
      cpf,
      first_name,
      last_name,
      email,
      password,
      address: {
        zip_code,
        state,
        city,
        neighborhood,
        street,
        number
      }
    }

    await insertUser({ body })
      .then(() => {
        success()
        window.location.href = '/login'
      })
      .catch((er) => {
        error()
        console.error(er)
      })
      .finally(setLoading(false))
  }

  const onRegisterCollectionPoint = async () => {
    setLoading(true)
    const {
      cnpj, corporate_name, trade_name, telephone, email, collection_days, collection_responsible_name, collection_responsible_email, password, zip_code, state, city, neighborhood, street, number
    } = data

    const body = {
      cnpj,
      corporate_name,
      trade_name,
      telephone,
      email,
      collection_days,
      collection_responsible_name,
      collection_responsible_email,
      password,
      address: {
        zip_code,
        state,
        city,
        neighborhood,
        street,
        number
      }
    }

    await insertCollectionPoint({ body })
      .then(() => {
        success()
        window.location.href = '/login'
      })
      .catch((er) => {
        error()
        console.error(er)
      })
      .finally(setLoading(false))



  }

  const onSubmit = (event) => {
    event.preventDefault()
    const { cpf, cnpj } = data

    if (cpf) return onRegisterPerson()
    if (cnpj) return onRegisterCollectionPoint()
    
  }

  return {
    data,
    setData,
    onChange,
    onSubmit,
    toast,
    loading
  }
}