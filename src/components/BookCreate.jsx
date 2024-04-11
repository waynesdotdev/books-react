import {useState} from 'react';

export default function BookCreate({onCreate}) {
    const [title, setTitle] = useState('')

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onCreate(title)
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
