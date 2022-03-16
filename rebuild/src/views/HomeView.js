import classes from './HomeView.module.css'
import { useState } from "react";
import UserService from '../utils/api/service/UserService';
import CardList from '../components/cardList/CardList'

const HomeView = () => {
    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])

    const doSearch = (search) => {
        setSearch(search)
        UserService.search(search)
            .then(response => {
                console.log(response.data)
                setResult(response.data)
            })
    }

    return (
        <>
            <div className={classes.content}>
                <div className={classes.searchBar}>
                    <input className={' w-50 ma2 pa2'} type={'search'} onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                    <button onClick={() => doSearch(search)}>search</button>
                </div>
                <div className={classes.list}>
                    {result ? <CardList listOfItems={result} />
                            : 'Search for items in your database' }
                </div>
            </div>
        </>
    );
};

export default HomeView;