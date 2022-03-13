import {useState} from 'react'
import AliveService from '../../utils/api/service/AliveService'
import {HiOutlineCheck, HiX} from 'react-icons/hi'

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
                <><HiOutlineCheck className={ 'dark-green'}/><span className={' f5 dib v-mid'}>You're connected to the api!</span></>
            )
        } else {
            return (
                <HiX className={ 'dark-red' }/>
            )
        }
    }
console.log(data)
    return (
        <>
            <h1>{displayStatus()}</h1>
        </>
    );
};

export default Alive;