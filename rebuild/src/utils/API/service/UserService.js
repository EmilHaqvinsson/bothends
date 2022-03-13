import http from '../../UserApi'

const getAll = () => {
    return http.get('/getAll')
}

const search = (term) => {
    return http.get(`/search/${ term }`)
}

const toggleDone = (id) => {
    return http.put(`/toggleDone/${ id }`)
}

const add = (itemToAdd) => {
    return http.post('/newMemo', itemToAdd)
}

const timeLeft = (rightNow, dueDate) => {
    return http.get(`/timeLeft/${rightNow}/${dueDate}`)
}

const deleteItem = (title) => {
    return http.delete(`/deleteItem/${title}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll: getAll,
    toggleDone: toggleDone,
    search: search,
    add: add,
    timeLeft: timeLeft,
    deleteItem: deleteItem,
}