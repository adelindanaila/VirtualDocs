import axios from 'axios'
import config from './config.json'

const token = localStorage.getItem('token')

axios.defaults.baseURL = config.api_url
axios.interceptors.request.use(

    config => {
        
        config.headers.authorization = `Bearer ${token}`
        return config

    },

    error => {

        return Promise.reject(error)

    }

)