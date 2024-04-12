import {useState} from "react";
import BookEdit from "./BookEdit.jsx";
import useBooksContext from "../hooks/use-hooks-context.jsx";

export default function BookShow({book}) {
    const {deleteBookById} = useBooksContext()

    const [showEdit, setShowEdit] = useState(false)


    function handleDeleteClick() {
        deleteBookById(book.id)
    }

    function handleEditClick() {
        setShowEdit(!showEdit)
    }

    function handleSubmit() {
        setShowEdit(false)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="Books"/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className='delete' onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
}
