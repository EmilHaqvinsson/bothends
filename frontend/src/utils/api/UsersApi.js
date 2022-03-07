import Axios from 'axios'

const UsersApi = Axios.create({
    baseURL: 'http://localhost:29300'
})

export default UsersApi
