import {useState} from "react";
import BooksContext from "../context/books.jsx";
import useBooksContext from "../hooks/use-hooks-context.jsx";

export default function BookEdit({book, onSubmit}) {
    const {editBookById} = useBooksContext(BooksContext)

    const [title, setTitle] = useState(book.title)

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit()
        editBookById(book.id, title)
    }

    return (
        <form className='book-edit' onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" className='input' value={title} onChange={handleChange}/>
            <button className="button is-primary">Save</button>
        </form>

    );
}
