import{ API } from '../api/api'

export const getWasteByCollectionPoint = async ({ collection_point_id }) => {
  const endpoint =  `waste/point/${collection_point_id}`

  return await API.get(endpoint)
}

export const getAllWaste = async () => {
  const endpoint =  'waste'

  return await API.get(endpoint)
}

export const insertWaste = async ({ collection_point_id, waste_id }) => {

  const body = {
    collection_point_id,
    waste_id
  }

  const endpoint = 'waste/point'

  return API.post(endpoint, body)
}
