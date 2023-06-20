import axios from "axios"

export const VIACEP = axios.create({
  baseURL: 'https://viacep.com.br/ws'
})