import{ API } from '../api/api'

export const getAllReport = async ({ id }) => {
  const endpoint =  `reports/all/${id}`

  return await API.get(endpoint)
}

export const getReportsWithInterval = async ({ id, init, end }) => {
  const endpoint =  `reports/interval/${id}`
  console.log(init, end)
  const body = {
    init: init,
    end: end
  }

  console.log(body)

  return await API.post(endpoint, body)
}