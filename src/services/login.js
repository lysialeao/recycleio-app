import{ API } from '../api/api'

export const getUser = async ({ login, password, type }) => {
  const endpoint =  'login'
  const body = { login, password, type }

  return await API.post(endpoint, body)
}

export const getAddress = async ({ id }) => {
  const endpoint = `address/${id}`

  return await API.get(endpoint)
}

export const checkEmail = async ({ email }) => {
  const endpoint = 'checkemail'

  return await API.post(endpoint, { email })
}