import{ API } from '../api/api';

export const insertUser = async ({ body }) => {

    const endpoint = 'user'

    return await API.post(endpoint, body)
}

export const insertCollectionPoint = async ({ body }) => {
    
    const endpoint = 'points'

    return await API.post(endpoint, body)
}