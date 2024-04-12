import useBooksContext from "../hooks/use-hooks-context.jsx";
import BookShow from "./BookShow.jsx";


export default function BookList() {
    const {books} = useBooksContext()

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book}/>
    })

    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    );
}
