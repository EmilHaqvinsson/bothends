import { Link } from 'react-router-dom'
import RoutingPath from '../../router/RoutingPath'
// import { UserContext } from '../../../src/utils/providers/UserProvider'
// import { useContext } from 'react'
import classes from '../navbar/NavBar.modules'

const NavBar = () => {

    return (
        <nav>
                <div className={ classes.item }>
                    <Link className={ `${ classes.link } ${ classes.active }` } to={ RoutingPath.homeView }>Home</Link>
                </div>
                <div className={ classes.item }>
                    <Link className={ `${ classes.link }`} to={ RoutingPath.getAll }>Get All!</Link>
                </div>
                <div className={ classes.item }>
                    <Link className={ `${ classes.link }`} to={ RoutingPath.newItem }>Add new item</Link>
                </div>
        </nav>
    )
}

export default NavBar