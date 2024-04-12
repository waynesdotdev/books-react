import {useState, useEffect} from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate.jsx";
import BookList from "./components/BookList.jsx";

export default function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks()
    }, []);

    async function editBookById(id, newTitle) {
        console.log(id)
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        console.log(response)

        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return {...book, ...response.data}
            }

            return book
        })
        setBooks(updatedBooks)
    }

    async function deleteBookById(id) {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book) => book.id !== id)
        setBooks(updatedBooks)
    }

    async function createBook(title) {
        const response = await axios.post('http://localhost:3001/books', {title})

        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks)
    }


    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
}

