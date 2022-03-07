import { Outlet, Link } from "react-router-dom";
import classes from './Navbar.module.css';
import Clock from '../components/Clock/Clock'
import Alive from '../components/Alive'

const Navbar = () => {
  return (
    <>
      <div className={classes.parent}>
        <nav className={classes.middleFour}>
          <Link to="/">
            <div className={classes.menuItem}>Home</div>
          </Link>
          <Link to="/getAll/">
            <div className={classes.menuItem}>All Memos</div>
          </Link>
          <Link to="/add/">
            <div className={classes.menuItem}>Add Memo</div>
          </Link>
        </nav>
        <div className={classes.infoBar}>
          <Clock className={classes.infoBarItem}/>
          <Alive className={classes.infoBarItemAlive}/>
        </div>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;