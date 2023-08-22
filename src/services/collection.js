import{ API } from '../api/api'

export const postCollection = async ({
  user_id,
  collection_point_id,
  date_time,
  waste_id
}) => {

  const body = {
    user_id,
    collection_point_id,
    date_time,
    waste_id
  }

  const endpoint = 'collection'

  return await API.post(endpoint, body)
}