import { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'

import { UserContext } from "../context/userContext"

import { getUser } from '../services/login'

import { ERRORS } from '../constants/errors'
import { SUCCESS } from '../constants/success'

export const useUser = () => {

  const [data, setData] = useState({})

  const {
    user,
    setUser,
    loading,
    setLoading
  } = useContext(UserContext)

  const handleOnChange = ({ id, value }) => {
    setData((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    await getUser({...data})
      .then((data) => {
        setUser(data)
        toast.success(SUCCESS.WELCOME)
      })
      .catch(({ response }) => toast.error(response.data.error || ERRORS.GENERIC))
      .finally(setLoading(false))
  }

  return {
    handleOnChange,
    onSubmit,
    loading,
    user
  }
}