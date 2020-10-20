import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = nameObject => {
    const request = axios.post(baseURL, nameObject)
    return request.then(response => response.data)
}

const del = (id) => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`) 
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    del
}