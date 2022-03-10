import { Link, useNavigate } from 'react-router-dom'
import RoutingPath from '../router/RoutingPath'

const HomeView = () => {
    const navigate = useNavigate()

    return (
        <>
            <Link to={ RoutingPath.homeView }><h1>Home</h1></Link>
        </>
    );
};

export default HomeView;