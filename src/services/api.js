import axios from 'axios'

const api = axios.create({

    // baseURL: 'https://morning-crag-27342.herokuapp.com/'
    baseURL: 'http://localhost:3333/'

})

export default api;