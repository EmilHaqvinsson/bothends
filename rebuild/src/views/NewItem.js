import {useState} from 'react'
import {MdDoneOutline, MdDone} from 'react-icons/md'
import classes from './NewItem.module.css'

const NewItem = () => {
const [title, setTitle] = useState('')
const [deadline, setDeadline] = useState('')
const [text, setText] = useState('')
const [assignedTo, setAssignedTo] = useState('')

const handleChangedTitle = (e)=> {
    setTitle(e.target.value)
}
        <>
            <h1>ADD NEW ITEM</h1>
            <form class="pa4 black-80">
                <div class="measure">
                    <label for="title" class="f6 b db mb2">
                        <span class="normal black-60"></span>
                    </label>
                    <input id="title"
                           class="input-reset ba b--black-20 pa2 mb2 db w-100"
                           type="text"
                           placeholder={'Joe Giggolo'}
                           aria-describedby="name-desc">
    <small id="name-desc" class="f6 black-60 db mb2">Apparently helps with Accessibility</small></input>
    </div>
                <div className="measure">
                    <label htmlFor="deadline" className="f6 b db mb2">
                        <span className="normal black-60"></span>
                    </label>
                    <input id="title"
                           className="input-reset ba b--black-20 pa2 mb2 db w-100"
                           type="date"
                           aria-describedby="name-desc">
                        <small id="name-desc" className="f6 black-60 db mb2">Please set a deadline for your item.</small></input>
                </div>
</form>
            <h1><MdDoneOutline/><MdDone/></h1>
        </>
    );
}}

export default NewItem;