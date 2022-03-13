import classes from './Card.module.css'

const HiddenInfo = ({text, created, dueDate}) => {
    return (
        <>
            <span className={classes.content}>{text}</span>
            <div className={classes.footer}>
                <span className={classes.footCreated}>Skapades: { created }</span>
                <span className={classes.footDeadline}>Deadline: { dueDate }</span>
            </div>
        </>
    );
};

export default HiddenInfo;