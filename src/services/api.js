import axios from 'axios'

// key: 2da56d2102d1749eda3d47fbafbaf0be5f54d291
// base url: 'https://api-ssl.bitly.com/v4'

export const key ='2da56d2102d1749eda3d47fbafbaf0be5f54d291'

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    }
})

export default api

