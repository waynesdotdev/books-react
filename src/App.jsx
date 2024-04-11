import {useState} from "react";
import BookCreate from "./components/BookCreate.jsx";
import BookList from "./components/BookList.jsx";

export default function App() {
    const [books, setBooks] = useState([]);

    function deleteBookById(id) {
        const updatedBooks = books.filter((book) => book.id !== id)
        setBooks(updatedBooks)
    }

    function createBook(title) {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 99999),
                title
            }
        ]
        setBooks(updatedBooks)
    }

    function editBookById(id, newTitle) {
        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return {...book, title: newTitle}
            }

            return book
        })
        setBooks(updatedBooks)
    }

    return (
        <div className='app'>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
}

