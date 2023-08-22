import{ API } from '../api/api'

export const getAllCollectionPoints = async () => {
  const endpoint =  'points'
  return await API.get(endpoint)
}

export const getCollectionPointsByZipCode = async ({ zip_code }) => {
  const endpoint =  `points/${zip_code}`
  return await API.get(endpoint)
}

export const getCollectionPointByCnpj = async ({ cnpj }) => {
  const endpoint = `points/${cnpj}`
  return await API.get(endpoint)
}