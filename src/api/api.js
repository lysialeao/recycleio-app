import axios from "axios"

export const API = axios.create({
  baseURL: 'https://recycleio-api.herokuapp.com/',
  timeout: 1000,
  headers: {
    'Content-Types' : 'appliction/json',
    'Acess-Control-Allow-Origin': '*'
  }
})