import { Link } from 'react-router-dom'
import RoutingPath from '../../router/RoutingPath'
import Alive from '../alive/Alive'
// import { UserContext } from '../../../src/utils/providers/UserProvider'
// import { useContext } from 'react'
import classes from '../navbar/NavBar.module.css'

const NavBar = () => {

    return (
        <>
        <nav>
                <div className={ classes.item }>
                    <Link className={ `${ classes.link }` } to={ RoutingPath.homeView }>Home</Link>
                </div>
                <div className={ classes.item }>
                    <Link className={ `${ classes.link }`} to={ RoutingPath.getAll }>Get All!</Link>
                </div>
                <div className={ classes.item }>
                    <Link className={ `${ classes.link }`} to={ RoutingPath.newItem }>Add new item</Link>
                </div> 
                <div className={ classes.itemRight }>
                    <Alive className={classes.itemRight}/>
                </div>
        </nav>
        </>
    )
}

export default NavBar