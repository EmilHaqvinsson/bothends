import {useState} from "react";
import UserService from "../utils/api/service/UserService";
import classes from './EditView.module.css'
import CardList from "../components/cardList/CardList";
import { BsClock } from "react-icons/bs";

function EditView() {
    const [isEditMode, setIsEditMode] = useState(true)
    const [search, setSearch] = useState('')
    const [result, setResult] = useState('')

    const handleEditMode = (e) => {
        setIsEditMode(!isEditMode)
    }
    
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
        <input className={' w-100 '} type={'search'} placeholder={'Start typing to search!'} onChange={ (e) => {
            doSearch(e.target.value)
        }} />
        {search && <CardList listOfItems={ result } isEdit={ isEditMode }/> }
        </div>
        <div className={search ? classes.list : classes.invisible}>
            <BsClock/>
        </div>
  </>
  )
}


export default EditView;
