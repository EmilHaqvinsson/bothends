import AliveService from '../utils/api/service/AliveService'
import { useState, useEffect } from 'react'
import { ImHappy, ImAngry } from 'react-icons/im'

const Alive = () => {
    const [data, setData] = useState('')
    const [conn, setConn] = useState('')

    const checkApiStatus = () => {
        AliveService.alive()
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    function displayEmoji() {
        if (data === true) {
            return <ImHappy className={'dark-blue'}/>
        } else {
            return <ImAngry className={'dark-red'}/>
        }
    }

    function testConnect() {
        checkApiStatus()
        if (data === true) {
            console.log(conn)
            return setConn('Connected!')
        } else {
            console.log(conn)
            return setConn('Not Connected')
        }
    }

    return (
        <>
            <div className={ 'fl' }>
                    { useEffect(()=> {
                    testConnect();
                }, [])}
                <div>
                    { displayEmoji() }</div>
            </div>
        </>
    )
}

export default Alive
