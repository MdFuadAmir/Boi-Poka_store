import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('../../../public/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="py-12">
            <h2 className="text-2xl font-bold text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;