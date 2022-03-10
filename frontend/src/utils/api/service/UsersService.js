import http from '../UserApi'

const getAll = () => {
    return http.get('/getAll')
}

const search = () => {
    return http.get('/search')
}

// const createUser = (newUser) => {
//     return http.post('/user', newUser)
// }

const toggleDone = (id) => {
    return http.put(`/toggleDone/${ id }`)
}

// const deleteUser = (name) => {
//     return http.delete(`/user/${ name }`)
// }

export default {
    getAll,
    toggleDone,
    search

    // createUser,
    // updateUser,
    // deleteUser
}
