import axios from "axios";

// axios.post('http://localhost:3000/gateway/usuario/create')

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})
