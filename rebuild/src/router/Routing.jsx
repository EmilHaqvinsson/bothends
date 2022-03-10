import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutingPath from './RoutingPath'
import HomeView from '../views/HomeView'
import GetAll from '../views/GetAll.js'
import NewItem from '../views/NewItem'
// import SignInView from '../views/signInView/SignInView'
// import SignedInView from '../views/SignedInView'

const Routing = (props) => {
    return (
        <BrowserRouter>
            { props.children }
            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
                <Route path={ RoutingPath.getAll } element={ <GetAll/> }/>
                <Route path={ RoutingPath.newItem } element={ <NewItem/> }/>
                {/*<Route path={ RoutingPath.signInView } element={ <SignInView/> }/>*/}
                {/*<Route path={ RoutingPath.signedInView } element={ <SignedInView/> }/>*/}
            </Routes>
        </BrowserRouter>
    )
}

export default Routing