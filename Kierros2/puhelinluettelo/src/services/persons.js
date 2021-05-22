import axios from 'axios'
const baseURL = '/api/persons' //muutos frontin deployaukseen

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = nameObject => {
    const request = axios.post(baseURL, nameObject)
    return request.then(response => response.data)
}

const del = (id) => {
    const request = axios.delete(baseURL + `/${id}`) 
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    del
}