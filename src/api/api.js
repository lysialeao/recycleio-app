import axios from "axios"

export const API = axios.create({
  baseURL: 'http://localhost:3333/'
  // baseURL: 'https://recycleio-api.herokuapp.com/',
  // timeout: 1000,
  // headers: {
  //   'Content-Types' : 'appliction/json',
  //   'Acess-Control-Allow-Origin': '*'
  // }
})