import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import {TiStopwatch, TiEdit} from 'react-icons/ti'
import {MdDoneOutline, MdDone, MdEditNote} from 'react-icons/md'
import classes from './ItemCard.module.css'
// import anim from '../../../src/utils/styles/animation.css'
import {useState} from 'react'
import HiddenInfo from './HiddenInfo'
import UserService from '../../utils/api/service/UserService'

const Card = ({ id, created, title, dueDate, isDone, text, assignedTo, setData }) => {
    const [isTaskDone, setIsTaskDone] = useState(isDone)
    const [isHidden, setIsHidden] = useState(true)
    const [isEditMode, setIsEditMode] = useState(false)
    
    let theClasses = [classes.parent]

    function toggleExpand() {
        setIsEditMode(previsEditModeValue => !previsEditModeValue)
        // setIsHidden(previsHiddenValue => !previsHiddenValue)
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
            <div onClick={() => toggleExpand()} className={classes.title} key={this.length}>
                { isEditMode ? <TiEdit className={classes.toggleIcon}/> 
                : <MdEditNote  className={classes.toggleIcon}/> }
                <input className={classes.title} type={'text'} defaultValue={title}/>
                <div className={classes.dueString}>
                    <TiStopwatch/>&nbsp;{dueDate}
                </div>


                </div>
            <div className={classes.isDone}>
                <h2 className={classes.setDone} onClick={() => toggleExpand()}>
                    <div className={classes.checkMama}>
                    {isTaskDone ? <MdEditNote className={classes.checked}/>
                        : <TiEdit className={classes.unChecked}/>}</div>
                </h2>
                {/* <h2 className={classes.setEdit} onClick={() => toggleEdit()}>
                    {!isEditMode ? <TiEdit className={anim.checkWrap}/>
                        : <TiDocumentAdd className={anim.checkWrap}/>}
                </h2> */}
            </div>
            {isEditMode && <HiddenInfo title={title} isDone={isTaskDone} isEditMode={isEditMode} text={text} created={created} dueDate={dueDate} assignedTo={assignedTo} setData={setData}/>}
            {/*{isEditMode ? <input type={'text'}/> : {title}}*/}
            {/*/!*{console.log('item ' + title + ' has ' + getTimeleft() + ' milliseconds left until deadline.')}*!/*/}
        </article>
    )
}

export default Card