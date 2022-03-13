import {useState} from 'react'
import UserService from '../utils/api/service/UserService'
import classes from './NewItem.module.css'

const NewItem = () => {
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState('')
    const [text, setText] = useState('')
    const [assignedTo, setAssignedTo] = useState('')
    // const [exampleItem, setExampleItem] = useState({})
    const [data, setData] = useState('')

    const handleChangedTitle = (e)=> {
        setTitle(e.target.value)
    }
    const handleChangedDeadline = (e)=> {
        setDeadline(e.target.value)
    }
    const handleChangedText = (e)=> {
        setText(e.target.value)
    }
    const handleChangedAssignedTo = (e)=> {
        setAssignedTo(e.target.value)
    }
    const sendDataToApi = () => {
        const itemToAdd = {
            'title': title,
            'dueDate': deadline,
            'text': text,
            'Assigned to': assignedTo
        }
        UserService.add(itemToAdd)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    // const exObj1 = {
    //     'title': setTitle('Fixa formulären åt Gullbringa Intressenter'),
    //     'dueDate': setDeadline('2022-06-28 23:59:59'),
    //     'text': setText('Föreningen behöver hjälp med att uppdatera formulär på hemsidan. Kolla över lite design-saker samtidigt.'),
    //     'Assigned To': setAssignedTo('Me')
    // }
    // const exObj2 = {
    //     'title': setTitle('Sätt igång med arbetet på JÄRNSPIK\'s hemsida'),
    //     'dueDate': setDeadline('2022-05-15 11:00:00'),
    //     'text': setText('Konsthantverksduon JÄRNSPIK verkar vara intresserade av en hemsida. Kolla lite på wordpress-aktiga saker så det blir så lätt som möjligt för dem att använda sig av hemsidan sen.'),
    //     'Assigned To': setAssignedTo('Me')
    // }
    //
    // function addExItem(item) {
    //     setExampleItem(item)
    //     return exampleItem
    // }

    return (
        <>
            <h1>ADD NEW ITEM</h1>
            <div class="mw9 center ph3-ns">
            <form className={ "pa4 ph5 black-80"}>
                <div className={ 'w-100' }>
                    <label htmlFor="title" className="f6 b db mb2 ml2">
                        <span className="normal black-60 f2">Title</span>
                    </label>
                    <input id="title"
                            onChange={handleChangedTitle}
                            className="ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            defaultValue={title}
                            aria-describedby="name-desc"
                            required/>
                <small id="name-desc" className="f6 black-60 db mb2">A title that describes your task.</small>
                </div>
                <div>
                    <label htmlFor="deadline" className={"f6 b db mb2 ml2"}>
                        <span className="bold black-60 f3">Due date</span>
                    </label>
                    <input id="deadline"
                           className="input-reset ba b--black-20 pa2 mb2 db w-100"
                           type="datetime"
                           aria-describedby="name-desc"
                           defaultValue={deadline}
                           onChange={handleChangedDeadline}
                           required/>
                        <small id="name-desc" className="f6 black-60 db mb2">When does your task need to be finished?</small>
                </div>

                <div>
                    <label htmlFor="textarea" className={"f6 b db mb2 ml2"}>
                        <span className="normal black-60 f3">Description</span>
                    </label>
                    <input id="text"
                           className="input-reset ba b--black-20 pa2 mb2 db w-100"
                           type="textarea"
                           aria-describedby="name-desc"
                           defaultValue={text}
                           onChange={handleChangedText}
                           required/>
                        <small id="name-desc" className="f6 black-60 db mb2">A short description of the item.</small>
                </div>
                <div>
                    <label htmlFor="assignedTo" className={"f6 b db mb2 ml2"}>
                        <span className="normal black-60 f3">Assigned to</span>
                    </label>
                    <input id="assignedTo"
                           className="input-reset ba b--black-20 pa2 mb2 db w-100"
                           type="text"
                           aria-describedby="assignedTo-desc"
                           defaultValue={assignedTo}
                           onChange={handleChangedAssignedTo}
                           required/>
                        <small id="name-desc" className="f6 black-60 db mb2">Who's task is this?</small>
                </div>
            </form>
            <div>
                {/*<button onClick={() => addExItem(exObj1) }>"Example Task 01"</button>*/}
                {/*<button onClick={() => addExItem(exObj2) }>"Example Task 02"</button>*/}
                </div>
            <span className={' f4 w-100 c'}>
                <button onClick={ sendDataToApi }>ADD Item</button></span>
            <div className={classes.previewItem}>
                <h5>Title of item:</h5>
                {title}
                <h5>Deadline:</h5>
                    <h4>{deadline.replace('T', ', ')}</h4>
                <h4>Description of item:</h4>{text}
                <h4>Assigned to:</h4>{assignedTo}
            </div>
            </div>
        </>
    );
}

export default NewItem;