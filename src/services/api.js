import axios from 'axios'

const api = axios.create({

    baseURL: 'https://morning-crag-27342.herokuapp.com/'

})

export default api;