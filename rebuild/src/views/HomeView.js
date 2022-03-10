import { Link, useNavigate } from 'react-router-dom'
import RoutingPaths from '../router/RoutingPath'

const HomeView = () => {
    const navigate = useNavigate()

    return (
        <>
            <Link to={RoutingPaths.homePage}><h1>Home</h1></Link>
        </>
    );
};

export default HomeView;