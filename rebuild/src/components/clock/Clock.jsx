// import {useState , useEffect} from "react";
// import classes from './Clock.module.css';

// function Clock(){
//     const [date, setDate] = useState(Date.now());

//     function showClock() {
//         setDate(Date.now())
//     }

//     useEffect(() => {
//         const timerId = setInterval(showClock, 1000);
//         return function cleanup() {
//             clearInterval(timerId);
//         };
//     }, []);
//     const uOTArray = ['Hours', 'Minutes', 'Seconds']
//     const clockArray = date.toLocaleTimeString('sv-SV').split(':')
//     return <div className={' ma2 '}>
//         <span className={' ma2 pa2 '}>{clockArray}</span>
//     </div>
// };

// export default Clock;