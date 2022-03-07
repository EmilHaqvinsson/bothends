import Card from './Card'

const CardList = ({ memos }) => {
    return (
        <>
            {
                memos.map((memo, index) => {
                    return (
                        <Card className={ 'bgGray' }
                              key={ index }
                              id={ memo.id }
                              created={ memo.created }
                              title={memo.title }
                              dueDate={memo.dueDate }
                              isDone={memo.isDone }
                              text={memo.text }
                              assignedTo={memo.assignedTo }/>
                    )
                })
            }
        </>
    )
}

export default CardList
