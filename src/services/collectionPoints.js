import{ API } from '../api/api'

export const getAllCollectionPoints = async () => {
  const endpoint =  'points'
  return await API.get(endpoint)
}

export const getCollectionPointsFilter = async ({ wastes }) => {
  const endpoint =  `points/filter`

  const body = { wastes: wastes}

  return await API.post(endpoint, body)
}

export const getCollectionPointByCnpj = async ({ cnpj }) => {
  const endpoint = `points/${cnpj}`
  return await API.get(endpoint)
}