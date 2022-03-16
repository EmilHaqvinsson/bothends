import {useState, useEffect, useCallback} from 'react'
import CardList from '../components/cardList/CardList'
import UserService from '../utils/api/service/UserService'
import classes from './HomeView'

let mounted = true

const GetAll = () => {
    const [allItems, setAllItems] = useState([]);

    const getItems = () => {
        UserService.getAll()
            .then(response => {
                const theTodos = response.data
                if (mounted) { setAllItems(theTodos) }
            })
            .catch(error => console.log(error))
            return () => mounted = true
    }

    useEffect(() => {
        getItems();
    }, []);

    const parentUpdater = ( useCallback(
        (items) => {
            console.log(items)
            mounted = true
            getItems()
            console.log(allItems)
        }, [allItems])
    );
    

    return (
        <div className={classes.content}>
            <h1 className={' pa2 ml4'}>All items</h1>
            <CardList listOfItems={ allItems }
                        update={parentUpdater} className={'flex'}/>
        </div>
    );
};

export default GetAll;