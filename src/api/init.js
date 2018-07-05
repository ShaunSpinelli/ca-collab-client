import axios from 'axios'

const api = axios.create({
    // baseURL:'http://localhost:8080'
    baseURL:'https://ca-collab.herokuapp.com'
})

// automatically add token to headers in requests

const setJWT = (token) =>{
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export {api, setJWT}