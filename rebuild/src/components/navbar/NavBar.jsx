import { Link } from 'react-router-dom'
import RoutingPath from '../../router/RoutingPath'
import Alive from '../alive/Alive'
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
                <div className={ classes.item }>
                    <Link className={ `${ classes.link }`} to={ RoutingPath.editView }>Edit</Link>
                </div>
                <div className={ classes.itemRight }>
                    <Alive className={classes.itemRight}/>
                </div>
        </nav>
        </>
    )
}

export default NavBar