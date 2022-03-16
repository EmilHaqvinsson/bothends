import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import {TiStopwatch} from 'react-icons/ti'
import {GiGoldMine} from 'react-icons/gi'
import {MdDoneOutline, MdDone} from 'react-icons/md'
import classes from './ItemCard.module.css'
import {useState} from 'react'
import HiddenInfo from './HiddenInfo'
import UserService from '../../utils/api/service/UserService'
import { HiExclamation } from 'react-icons/hi'

const Card = ({ id, created, title, dueDate, isDone, text, assignedTo, update, editMode}) => {
    console.log('The update var is worth: \n'+ update)
    const [expand, setExpand] = useState(true)
    const [isTaskDone, setIsTaskDone] = useState(isDone)
    const [isHidden, setIsHidden] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    
    let theClasses = [classes.parent]

    function editCheck() {
        setIsEditMode(previsEditModeValue => !previsEditModeValue)
        for (let f = 0; f < Card.arguments.length; f++) {
            const thisProp = Card.arguments[f];
            console.log(thisProp)
        }
    }

    function toggleExpand() {
        setExpand(prevexpandValue => !prevexpandValue)
        setIsHidden(previsHiddenValue => !previsHiddenValue)
        editCheck()
    }

    function toggleDone() {
        UserService.toggleDone(id)
            .then(response => {
                console.log(response.data)
                setIsTaskDone(response.data)
            }).catch(error => console.log(error))
    }

    function getClasses(prop) {
        theClasses = [classes.parent]
        if (!isTaskDone) {
            theClasses.push(classes.activeTask)
            return theClasses.join(' ')
        } else if (isTaskDone) {
            theClasses.push(classes.inactive)
            {isEditMode ? theClasses.push(classes.prop) : theClasses.push(theClasses)}
            return theClasses.join(' ')
        }
    }

    return (
        <>
                {isEditMode && <HiExclamation className={getClasses('tester')}/>}
            <div onClick={() => toggleExpand()} className={classes.title} key={id}>
                { isHidden ? <BsChevronDoubleDown className={classes.toggleIcon}/>
                            : <BsChevronDoubleUp  className={classes.toggleIcon}/> }
                <span className={classes.title}>
                    {title}</span>&nbsp;
                <div className={classes.dueString}>
                    <TiStopwatch/>&nbsp;{dueDate}
                    <span className={classes.inlineAss}><GiGoldMine/>&nbsp;Assigned to: {assignedTo}</span>
                </div>


                </div>
            <div className={classes.isDone}>
                <h2 className={classes.setDone} onClick={() => toggleDone()}>
                    <div className={classes.checkMama}>
                    {isTaskDone ? <MdDone className={classes.checked}/>
                        : <MdDoneOutline className={classes.unChecked}/>}</div>
                </h2>
            </div>
            {expand && <HiddenInfo title={title}
                                   isDone={isTaskDone}
                                   isEditMode={isEditMode}
                                   text={text} created={created}
                                   dueDate={dueDate}
                                   assignedTo={assignedTo}
                                   update={update}
                                   isEdit = { isEditMode } />
                                   }
            
            {/*{isEditMode ? <input type={'text'}/> : {title}}*/}
            {/*/!*{console.log('item ' + title + ' has ' + getTimeleft() + ' milliseconds left until deadline.')}*!/*/}
        </>
    )
}

export default Card