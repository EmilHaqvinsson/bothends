import ItemCard from '../itemcard/ItemCard'

const CardList = ({ listOfItems }) => {
    console.log(listOfItems)
    return (
        <>
            {
                listOfItems.map((item, index) => {
                    console.log(listOfItems)
                    return (
                        <ItemCard className={ 'bgGray' }
                              key={ index }
                              id={ item.id }
                              created={ item.created }
                              title={item.title }
                              dueDate={item.dueDate }
                              isDone={item.isDone }
                              text={item.text }
                              assignedTo={item.assignedTo }/>
                    )
                })
            }
        </>
    )
}

export default CardList
