import classes from './AllTodos.module.css'
import useState from 'react'
import UsersService from '../utils/api/service/UsersService'
import GetAllMemos from '../components/GetAllUsers'

const AllTodos = () => {

    return (
        <GetAllMemos className={classes.homeBody}/>
    );
}

export default AllTodos;