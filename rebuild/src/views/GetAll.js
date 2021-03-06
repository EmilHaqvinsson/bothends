import {useState, useEffect} from 'react'
import CardList from '../components/cardList/CardList'
import UserService from '../utils/api/service/UserService'

const GetAll = () => {
    const [allItems, setAllItems] = useState([]);

    const getItems = () => {
        UserService.getAll()
            .then(response => {
                const theTodos = response.data
                // console.log(theTodos)
                setAllItems(theTodos)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <>
            <h1 className={' pa2 ml4'}>All items</h1>
            <CardList listOfItems={ allItems } className={'flex'}/>
        </>
    );
};

export default GetAll;