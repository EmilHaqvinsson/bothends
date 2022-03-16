import ItemCard from '../itemcard/ItemCard'
import EditCard from '../itemcard/EditCard'
import { Link } from 'react-router-dom'

const CardList = ({ listOfItems, update, isEdit}) => {
    console.log(listOfItems, update)
    if (listOfItems.length ===  0) {
        return (
            <>
                <h1>No items in the list.</h1>
                <h4>..but you can easily <Link to={'/newItem'}> add some</Link>!</h4>
        </>
        )
    } else if (isEdit === true) {
        listOfItems.map((item, index) => {
        return (
            <EditCard className={ 'bgGray' }
                  key={ item.id }
                  id={ item.id }
                  created={ item.created }
                  title={ item.title }
                  dueDate={ item.dueDate }
                  isDone={ item.isDone }
                  text={ item.text }
                  assignedTo={ item.assignedTo }
                  update={ update }
                  isEdit = { isEdit }
                  />
        )
    })}
    
    return (
        <>
            {
                listOfItems.map((item, index) => {
                    return (
                        <ItemCard className={ 'bgGray' }
                              key={ index }
                              id={ item.id }
                              created={ item.created }
                              title={ item.title }
                              dueDate={ item.dueDate }
                              isDone={ item.isDone }
                              text={ item.text }
                              assignedTo={ item.assignedTo }
                              update={ update }
                              isEdit = { isEdit }
                              />
                    )
                })
            }
        </>
    )
}

export default CardList
