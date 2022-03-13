import {useState} from "react";
import UserService from "../utils/api/service/UserService";
import classes from './EditView.module.css'
import CardList from "../components/cardList/CardList";

function EditView() {
    const [isEditMode, setIsEditMode] = useState(false)
    const [search, setSearch] = useState('')
    const [result, setResult] = useState('')
    
    const doSearch = (search) => {
        setSearch(search)
        UserService.search(search)
        .then(response => {
            console.log(response.data)
            setResult(response.data)
        })
    }

  return(
      <>
    <div className={classes.searchBar}>
    <input className={' w-100 '} type={'search'} onChange={(e) => {
        setSearch(e.target.value)
    }} />
    <button onClick={() => doSearch(search)}>search</button>
</div>
<div className={classes.list}>
    <CardList listOfItems={result} />
</div>
</>
  )
}

export default EditView;
