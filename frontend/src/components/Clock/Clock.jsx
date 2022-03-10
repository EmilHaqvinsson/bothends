import {useState , useEffect} from "react";
import classes from './Clock.module.css';

function Clock(){
    const [date, setDate] = useState(new Date);

    function showClock() {
        setDate(new Date)
    }

    useEffect(() => {
        const timerId = setInterval(showClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    // const uOTArray = ['Hours', 'Minutes', 'Seconds']
    // const clockArray = date.toLocaleTimeString('sv-SV').split(':')
    return <div className={classes.lookAtTheTime}>
                    <span><Clock/></span>
                </div>
    };

export default Clock;