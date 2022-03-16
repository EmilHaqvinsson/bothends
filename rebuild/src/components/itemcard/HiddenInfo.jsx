import { HiRewind,  HiOutlineTrash, HiOutlinePencilAlt } from 'react-icons/hi'
import { useState } from 'react';
import UserService from '../../utils/api/service/UserService'
import classes from '../itemcard/ItemCard.module.css'

const HiddenInfo = ({title, isDone, text, created, dueDate, update, isEdit}) => {
    console.log(update)
    const [isDeleted, setIsDeleted] = useState(false)
    const [editMode, setEditMode] = useState(isEdit)
    const [data, setData] = useState([])

    let hiddenClasses = [classes.footerParent]
    

    function undoDeleteItem(title) {
        setIsDeleted(false)
        console.log(`Unfortunately, due to the pandemic this function is still in active development :(`)
    }

    const deleteItemWithTitle = (title) => {
        console.log(`RIGHT NOW "${isDeleted}" needs to CHAAAANGE!!!!!`)
            setIsDeleted(previsDeleted => !previsDeleted)
        UserService.deleteItem(title)
        .then(response => {
            console.log(response.data)
            update(response.data)
            setData(response.data)
            console.log(data)
            setIsDeleted(false)
        }).catch(error => console.log(error))
    } 
    const toggleEditMode = () => {
        console.log(`isEdit is "${isEdit}".`)
        setEditMode(previsEditMode => !previsEditMode)
    }

    if (isDone) {
        hiddenClasses = [classes.footerParent]
        hiddenClasses.push(classes.inactiveBackground)
    }
        return (
        <div className={hiddenClasses.join(' ')}>
            <div>
                <span className={classes.content}>{text}</span>
                <div className={classes.content}>
                    <span className={classes.footCreated}>Skapades: { created }</span>
                    <span className={classes.footDeadline}>Deadline: { dueDate }</span>
                </div>
                <div className={classes.ultraFooter}>
                    <span className={classes.fatHeader}>
                        {!isEdit && <div onClick={() => toggleEditMode(title)}><HiOutlinePencilAlt/></div>}
                        {console.log('RIGHT NOW isDeleted is "'+ isDeleted + '" for item "' + title + '".')}
                        {!isDeleted && <div onClick={() => deleteItemWithTitle(title)}><HiOutlineTrash/></div>}
                        </span>
                        </div>
            </div>
        </div>
        )
                                }

export default HiddenInfo;