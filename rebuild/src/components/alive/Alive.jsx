import axios from 'axios'
import useState from 'react'
import AliveService from '../../utils/API/service/AliveService'

const Alive = () => {
    const [data, setData] = useState([]);

    const isAlive = () => {
        const app = AliveService.alive
    }



    return (
        <>
            <h1>Alive</h1>
            <p>Sup bitches!</p>
            {data ? <p>No connection has been made!</p>
                : <p>We are connected.</p>}
        </>
    );
};

export default Alive;