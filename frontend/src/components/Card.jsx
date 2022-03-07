import {BsSquare, BsList, BsChevronCompactUp, BsCheck} from 'react-icons/bs'
import {TiStopwatch} from 'react-icons/ti'
import classes from './Card.module.css'
import {useState} from 'react'
import HiddenInfo from './HiddenInfo'

const Card = ({ id, created, title, dueDate, isDone, text, assignedTo }) => {
    const [expand, setExpand] = useState(false)
    const [xpandIcon, setXpandIcon] = useState(<BsList/>)
    const [isTaskDone, setIsTaskDone] = useState(isDone)

    function toggleExpand() {
        if(xpandIcon === <BsList className={classes.toggleIcon}/>) {
            setXpandIcon(<BsChevronCompactUp className={classes.toggleIcon}/>)
        } else if (xpandIcon === <BsChevronCompactUp className={classes.toggleIcon}/>) {
            setXpandIcon(<BsList className={classes.toggleIcon}/>)
        }
        setExpand(prevexpandValue => !prevexpandValue)
    }

    function checkIfDone() {
        if(isTaskDone === true) {
            return true
        } else {
            return false
        }
    }

    return (
            <article className={classes.parent}>

                <h2 onClick={() => toggleExpand()} className={classes.title}>{xpandIcon}&nbsp;{title}<span className={classes.dueString}><TiStopwatch/>&nbsp;{dueDate}</span></h2>
                <div className={classes.isDone}>
                    <h2 className={classes.setDone}>
                        {!isDone ? <BsSquare/> : <BsCheck/>}
                    </h2>
                </div>
                {expand && <HiddenInfo text={text} created={created} dueDate={dueDate}/>}
            </article>
        )
    }

export default Card