import { HL_API_URL } from '@env'
import axios from 'axios'

const ApiClient = axios.create({
    baseURL: HL_API_URL,
})

export default ApiClient
