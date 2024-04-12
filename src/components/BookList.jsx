import BookShow from "./BookShow.jsx";
import {useContext} from "react";
import BooksContext, {Provider} from "../context/books.jsx";

export default function BookList({books, onDelete, onEdit}) {
    const {count, incrementCount} = useContext(BooksContext)

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
    })

    return (
        <div className='book-list'>
            {count}
            <button onClick={incrementCount}>Click to Increment</button>
            {renderedBooks}
        </div>
    );
}
