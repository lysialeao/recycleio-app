import{ API } from '../api/api'

export const getAllReport = async ({ id }) => {
  const endpoint =  `reports/all/${id}`

  return await API.get(endpoint)
}