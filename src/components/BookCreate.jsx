import {useState} from 'react';
import useBooksContext from "../hooks/use-hooks-context.jsx";

export default function BookCreate() {
    const {createBook} = useBooksContext()

    const [title, setTitle] = useState('')

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createBook(title)
        setTitle('') // reset input field
    }

    return (
        <div className='book-create'>
            <h3>Add A Book</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="">Title </label>
                <input className={'input'} type="text" value={title} onChange={(e) => handleChange(e)}/>
                <button className={'button'}>Create!</button>
            </form>
        </div>
    );
}
