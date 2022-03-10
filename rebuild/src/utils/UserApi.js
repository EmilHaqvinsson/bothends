import Axios from 'axios'

const UserApi = Axios.create({
    baseURL: 'http://localhost:29300'
})

export default UserApi