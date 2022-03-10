import http from '../../UserApi'

const alive = () => {
    return http.get('/')
}

export default {
    alive
}
