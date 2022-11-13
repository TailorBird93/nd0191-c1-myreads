import React from "react";
import "../App.css"

import Book from "./Book";

const Shelf= ({books, title, handleChange}) => {
    const bookNoImage=books.filter(book=> (book.imageLinks.thumbnail==false))
    return (
        <>
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                    {books.map(b => (
                        <li key={b.id}>
                            <Book book={b} handleChange={handleChange}/>
                        </li>
                    ))}

            </ol>
        </div>
        
        </>
    )}

export default Shelf;