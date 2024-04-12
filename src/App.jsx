import {useEffect, useContext} from "react";
import BooksContext from "./context/books.jsx";
import BookCreate from "./components/BookCreate.jsx";
import BookList from "./components/BookList.jsx";

export default function App() {
    const {fetchBooks} = useContext(BooksContext)

    useEffect(() => {
        fetchBooks()
    }, []);

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    )
}

