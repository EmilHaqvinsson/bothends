import {HiTrash, HiRewind} from 'react-icons/hi'
import { useState , useEffect} from 'react';
import UserService from '../../utils/api/service/UserService'
import classes from '../itemcard/ItemCard.module.css'

const HiddenInfo = ({title, isDone, text, created, dueDate, setAllItems}) => {
    const [isDeleted, setIsDeleted] = useState('false')
    const [isEditMode, setIsEditMode] = useState('false')
    let hiddenClasses = [classes.footerParent]

    function undoDeleteItem(title) {
        setIsDeleted(false)
        console.log(`Unfortunately, due to the pandemic this function is still in active development :(`)
    }

    function deleteItemWithTitle(title) {
        setIsDeleted(true)
        UserService.deleteItem(title)
        .then(response => {
            console.log(response.data)
        })
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
                        {isEditMode ? <div onClick={() => deleteItemWithTitle(title) }><HiTrash/></div>
                            : <div onClick={() => undoDeleteItem(title) }><HiRewind/></div>
                        }

                        {!isDeleted ? [<div onClick={() => deleteItemWithTitle(title) }>,<HiTrash/>,</div>]
                                    : <div onClick={() => undoDeleteItem(title) }><HiRewind/></div>
                                    }
                        </span>
                        </div>
            </div>
        </div>
        )
                                }

export default HiddenInfo;