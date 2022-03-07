import http from '../UsersApi'

const getAll = () => {
    return http.get('/getAll')
}

const search = () => {
    return http.get('/search')
}

// const createUser = (newUser) => {
//     return http.post('/user', newUser)
// }

const EditMemo = (id) => {
    return http.put(`/edit/${ id }`)
}

// const deleteUser = (name) => {
//     return http.delete(`/user/${ name }`)
// }

export default {
    getAll,
    EditMemo,
    search

    // createUser,
    // updateUser,
    // deleteUser
}
