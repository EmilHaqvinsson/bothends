import {HiTrash, HiMenuAlt2, HiOutlineInformationCircle} from 'react-icons/hi'
import classes from '../itemcard/ItemCard.module.css'

const HiddenInfo = ({isDone, text, created, dueDate}) => {
    let hiddenClasses = [classes.footerParent]

    if (isDone) {
        hiddenClasses = [classes.footerParent]
        hiddenClasses.push(classes.inactiveBackground)
    }

    return (
        <div className={hiddenClasses.join(' ')}>
            <span className={classes.content}>{text}</span>
            <div className={classes.content}>
                <span className={classes.footCreated}>Skapades: { created }</span>
                <span className={classes.footMiddle}><HiMenuAlt2/>&nbsp;<HiTrash/>&nbsp;<HiOutlineInformationCircle/></span>
                <span className={classes.footDeadline}>Deadline: { dueDate }</span>
            </div>

        </div>
    );
};

export default HiddenInfo;