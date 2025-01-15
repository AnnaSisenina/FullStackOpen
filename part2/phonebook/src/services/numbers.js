import anxios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>{
    const request = anxios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = anxios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = anxios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = anxios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, remove, update }