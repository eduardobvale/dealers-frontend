import axios from 'axios'

const apiClient = () => {
  const baseURL = `${process.env.REACT_APP_BACKEND_URL}`

  return axios.create({ baseURL })
}

export default apiClient
