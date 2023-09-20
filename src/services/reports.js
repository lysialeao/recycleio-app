import{ API } from '../api/api'

export const getAllReport = async ({ id }) => {
  const endpoint =  `reports/all/${id}`

  return await API.get(endpoint)
}

export const getReportsWithInterval = async ({ id, init, end }) => {
  const endpoint =  `reports/interval/${id}`

  const body = {
    init: init,
    end: end
  }

  return await API.post(endpoint, body)
}

export const getAllReportUser = async ({ id }) => {
  const endpoint =  `reports/user/all/${id}`

  return await API.get(endpoint)
}

export const getReportsWithIntervalUser = async ({ id, init, end }) => {
  const endpoint =  `reports/user/interval/${id}`

  const body = {
    init: init,
    end: end
  }

  return await API.post(endpoint, body)
}