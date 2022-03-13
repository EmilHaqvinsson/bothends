import ItemCard from '../itemcard/ItemCard'

const CardList = ({ listOfItems }) => {
    console.log(listOfItems)
    if (listOfItems.length ===  0) {
        return (<h1>No items at all in the list :(</h1>)}
    return (
        <>
            {
                listOfItems.map((item, index) => {
                    return (
                        <ItemCard className={ 'bgGray' }
                              key={ index }
                              id={ item.id }
                              created={ item.created }
                              title={item.title }
                              dueDate={item.dueDate }
                              isDone={item.isDone }
                              text={item.text }
                              assignedTo={item.assignedTo }
                              setAllItems={item.setAllItems}
                              />
                    )
                })
            }
        </>
    )
}

export default CardList
