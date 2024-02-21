import{ API } from '../api/api'

export const postCollection = async ({
  user_id,
  collection_point_id,
  date_time,
  waste_id,
  user_name, 
  weight, 
  status
}) => {

  const body = {
    user_id,
    collection_point_id,
    date_time,
    waste_id,
    user_name, 
    weight,
    status
  }

  const endpoint = 'collection'

  return await API.post(endpoint, body)
}

export const getCollectionsByCnpj = async ({ id }) => {

  const endpoint = `collection/point/${id}`

  return await API.get(endpoint)
}

export const getCollectionsByCpf = async ({ id }) => {

  const endpoint = `collection/user/${id}`

  return await API.get(endpoint)
}

export const updateCollection = async ({ id, weight, status }) => {
  const endpoint = `collection/${id}`

  const body = {
    weight,
    status
  }

  return await API.patch(endpoint, body)
}