import {BsSquare, BsChevronDoubleDown, BsChevronDoubleUp, BsCheck} from 'react-icons/bs'
import {TiStopwatch, TiEdit, TiDocumentAdd} from 'react-icons/ti'
import classes from './ItemCard.module.css'
import anim from '../../../src/utils/styles/animation.css'
import {useState} from 'react'
import HiddenInfo from './HiddenInfo'
import UserService from '../../utils/api/service/UserService'

const Card = ({ id, created, title, dueDate, isDone, text, assignedTo }) => {
    const [expand, setExpand] = useState(false)
    const [isTaskDone, setIsTaskDone] = useState(isDone)
    const [isHidden, setIsHidden] = useState(true)
    const [isEditMode, setIsEditMode] = useState(false)
    let timeLeft = Date.parse(dueDate)
    let theClasses = [classes.parent]

    function toggleExpand() {
        setExpand(prevexpandValue => !prevexpandValue)
        setIsHidden(previsHiddenValue => !previsHiddenValue)
    }

    function toggleEdit() {
        setExpand(previseditmodeValue => !previseditmodeValue)
    }

    function toggleDone() {
        UserService.toggleDone(id)
            .then(response => {
                console.log(response.data)
                setIsTaskDone(response.data)
            }).catch(error => console.log(error))
    }

    function getTimeleft() {
        const rightNow = new Date()
        const deadline = Date.parse(dueDate)
        // console.log(timeLeft+' milliseconds left after now ('+rightNow+') was subtracted from deadLine ('+deadline+').')
        // const doneCalc = timeLeft.toLocaleTimeString()
        UserService.timeLeft(Date.parse(rightNow), deadline).then(response => {
            console.log(response.data)
            timeLeft = response.data
        }).catch(error => {console.log(error)})
        return timeLeft
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
            <div onClick={() => toggleExpand()} className={classes.title}>
                { isHidden ? <BsChevronDoubleDown/> : <BsChevronDoubleUp/> }
                <span className={classes.title}>{title}</span>&nbsp;
                <span className={classes.dueString}><TiStopwatch/>&nbsp;{dueDate}</span>
                <span className={classes.dueString}>{getTimeleft()}</span>
                </div>
            <div className={classes.isDone}>
                <h2 className={classes.setDone} onClick={() => toggleDone()}>
                    {!isTaskDone ? <BsSquare className={anim.checkWrap}/>
                        : <BsCheck className={anim.checkWrap}/>}
                </h2>
                <h2 className={classes.setEdit} onClick={() => toggleEdit()}>
                    {!isEditMode ? <TiEdit className={anim.checkWrap}/>
                        : <TiDocumentAdd className={anim.checkWrap}/>}
                </h2>
            </div>
            {expand && <HiddenInfo isDone={isTaskDone} text={text} created={created} dueDate={dueDate}/>}
            {console.log('item ' + title + ' has ' + getTimeleft())}
        </article>
    )
}

export default Card