import {useState} from "react";
import BookEdit from "./BookEdit.jsx";

export default function BookShow({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false)


    function handleDeleteClick() {
        onDelete(book.id)
    }

    function handleEditClick() {
        setShowEdit(!showEdit)
    }

    function handleSubmit(id, newTitle) {
        setShowEdit(false)
        onEdit(id, newTitle)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return (
        <div className={'book-show'}>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className='delete' onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
}
