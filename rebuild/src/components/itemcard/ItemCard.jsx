import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import {TiStopwatch} from 'react-icons/ti'
import {GiGoldMine} from 'react-icons/gi'
import {MdDoneOutline, MdDone} from 'react-icons/md'
import classes from './ItemCard.module.css'
// import anim from '../../../src/utils/styles/animation.css'
import {useState} from 'react'
import HiddenInfo from './HiddenInfo'
import UserService from '../../utils/api/service/UserService'

const Card = ({ id, created, title, dueDate, isDone, text, assignedTo, update, isEdit }) => {
    console.log(update)
    const [expand, setExpand] = useState(false)
    const [isTaskDone, setIsTaskDone] = useState(isDone)
    const [isHidden, setIsHidden] = useState(true)
    const [isEditMode, setIsEditMode] = useState(false)
    
    let theClasses = [classes.parent]

    function toggleExpand() {
        setExpand(prevexpandValue => !prevexpandValue)
        setIsHidden(previsHiddenValue => !previsHiddenValue)
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
                {/* <h2 className={classes.setEdit} onClick={() => toggleEdit()}>
                    {!isEditMode ? <TiEdit className={anim.checkWrap}/>
                        : <TiDocumentAdd className={anim.checkWrap}/>}
                </h2> */}
            </div>
            {expand && <HiddenInfo title={title}
                                   isDone={isTaskDone}
                                   isEdit={isEditMode}
                                   text={text} created={created}
                                   dueDate={dueDate}
                                   assignedTo={assignedTo}
                                   update={update}/>
                                   }
            
            {/*{isEditMode ? <input type={'text'}/> : {title}}*/}
            {/*/!*{console.log('item ' + title + ' has ' + getTimeleft() + ' milliseconds left until deadline.')}*!/*/}
        </article>
    )
}

export default Card