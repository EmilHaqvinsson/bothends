import {useState} from 'react'
import AliveService from '../../utils/api/service/AliveService'
import {HiCheck, HiX} from 'react-icons/hi'

const Alive = () => {
    const [data, setData] = useState('')

    const isAlive = () => {
        AliveService.alive()
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    function displayStatus() {
        const conn = isAlive()

        if (!conn) {
            return (
                <HiCheck className={ 'dark-green'}/>
            )
        } else {
            return (
                <HiX className={ 'dark-red' }/>
            )
        }
    }

    return (
        <>
            <h1>{displayStatus()}</h1>
        </>
    );
};

export default Alive;