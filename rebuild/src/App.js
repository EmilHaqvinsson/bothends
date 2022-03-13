
import Routing from './router/Routing'
import NavBar from './components/navbar/NavBar'
import {UserContext} from './utils/providers/UserProvider'
import { useContext, useEffect } from 'react'

function App() {
    // const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    //
    // function checkIfUserIsAuthenticatedInBrowser() {
    //     const username = localStorage.getItem('username')
    //     console.log(username)
    //     if (username) {
    //         setAuthenticatedUser(username)
    //     }
    // }
    //
    // useEffect(() => {
    //     checkIfUserIsAuthenticatedInBrowser()
    // }, [])

    return (
        <Routing>
            <NavBar/>
        </Routing>
    )
}

export default App