import axios, { AxiosError } from 'axios'

const createAxiosInstance = () => {
  const instance = axios.create({
    //ベースのURLを設定
    baseURL: 'https://api.spoonacular.com/',
    timeout: 5000,
  })

  return instance
}

export const axiosInstance = createAxiosInstance()
