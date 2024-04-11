import {useState} from "react";

export default function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title)

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(book.id, title)
    }

    return (
        <form className='book-edit' onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" className='input' value={title} onChange={handleChange}/>
            <button className="button is-primary">Save</button>
        </form>

    );
}
