import{ API } from '../api/api'

export const getAllCollectionPoints = async () => {
  const endpoint =  'points'

  return await API.get(endpoint)
}