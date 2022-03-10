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

const add = () => {
    return http.post(`/addMemo`)
}

const timeLeft = (rightNow, dueDate) => {
    return http.get(`/timeLeft/${rightNow}/${dueDate}`)
}

export default {
    getAll: getAll,
    toggleDone: toggleDone,
    search: search,
    add: add,
    timeLeft: timeLeft,
}