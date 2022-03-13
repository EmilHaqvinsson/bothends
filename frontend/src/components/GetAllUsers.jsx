import UserService from '../utils/api/service/UsersService'
import { useState } from 'react'
import CardList from './CardList'

const GetAllMemos = () => {
    const [data, setData] = useState([])

    const getData = () => {
        UserService.getAll()
            .then(response => {
                console.log(response.data)
                setData(response.data.items)
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <h1>GetAllMemos</h1>
            <button onClick={ getData }>
                Get All Memos
            </button>
            <CardList memos={ data }/>
        </>
    )
}

export default GetAllMemos
