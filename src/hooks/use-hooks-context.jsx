import {useContext} from "react";
import BooksContext from "../context/books.jsx";

export default function useBooksContext() {
    return useContext(BooksContext)
}