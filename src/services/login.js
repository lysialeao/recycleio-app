import{ API } from '../api/api'

export const getUser = async ({ login, password, type }) => {
  const endpoint =  'login'
  const body = { login, password, type }

  await API.post(endpoint, body)

}