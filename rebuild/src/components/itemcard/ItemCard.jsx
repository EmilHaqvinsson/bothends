import {RiEdit2Line, RiEditBoxLine, RiEditLine, RiTodoLine} from 'react-icons/ri'
import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import {TiStopwatch, TiThumbsOk, TiDocumentAdd, TiInputCheckedOutline, TiInputChecked} from 'react-icons/ti'
import {MdDoneOutline, MdDone, MdEditNote, MdEdit} from 'react-icons/md'
import classes from './ItemCard.module.css'
// import anim from '../../../src/utils/styles/animation.css'
import {useState} from 'react'
import HiddenInfo from './HiddenInfo'
import UserService from '../../utils/api/service/UserService'

const Card = ({ id, created, title, dueDate, isDone, text, assignedTo, setData }) => {
    const [expand, setExpand] = useState(false)
    const [isTaskDone, setIsTaskDone] = useState(isDone)
    const [isHidden, setIsHidden] = useState(true)
    const [isEditMode, setIsEditMode] = useState(false)
    const [isDeleted, setIsDeleted] = useState('')
    

    let timeLeft = Date.parse(dueDate)
    let theClasses = [classes.parent]

    function toggleExpand() {
        setExpand(prevexpandValue => !prevexpandValue)
        setIsHidden(previsHiddenValue => !previsHiddenValue)
    }

    function toggleEdit() {
        setIsEditMode(prevIsEditModeValue => !prevIsEditModeValue)
    }

    function toggleDone() {
        UserService.toggleDone(id)
            .then(response => {
                console.log(response.data)
                setIsTaskDone(response.data)
            }).catch(error => console.log(error))
    }

    function getClasses() {
        theClasses = [classes.parent]
        if (!isTaskDone) {
            theClasses.push(classes.activeTask)
            return theClasses.join(' ')
        } else if (isTaskDone) {
            theClasses.push(classes.inactive)
            return theClasses.join(' ')
        }
    }

    return (
        <article className={getClasses()}>
            <div onClick={() => toggleExpand()} className={classes.title}  key={id}>
                { isHidden ? <BsChevronDoubleDown className={classes.toggleIcon}/> 
                : <BsChevronDoubleUp  className={classes.toggleIcon}/> }
                <span className={classes.title}>
                    {title}</span>&nbsp;
                <span className={classes.dueString}>
                    <TiStopwatch/>&nbsp;{dueDate}</span>

                </div>
            <div className={classes.isDone}>
                <h2 className={classes.setDone} onClick={() => toggleDone()}>
                    <div className={classes.checkMama}>
                    {isTaskDone ? <MdDone className={classes.checked}/>
                        : <MdDoneOutline className={classes.unChecked}/>}</div>
                </h2>
                {/* <h2 className={classes.setEdit} onClick={() => toggleEdit()}>
                    {!isEditMode ? <TiEdit className={anim.checkWrap}/>
                        : <TiDocumentAdd className={anim.checkWrap}/>}
                </h2> */}
            </div>
            {expand && <HiddenInfo title={title} isDone={isTaskDone} isDeleted={isDeleted} text={text} created={created} dueDate={dueDate} assignedTo={assignedTo} setData={setData}/>}
            {/*{console.log('item ' + title + ' has ' + getTimeleft() + ' milliseconds left until deadline.')}*/}
        </article>
    )
}

export default Card