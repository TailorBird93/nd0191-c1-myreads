import React from "react";
import "../App.css"

import Book from "./Book";

const Shelf= ({books, setBooks, title}) => {

    return (
        <>
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            {books.map((book)=>{
            const bookTitle=book.title;
            const author=book.authors[0];
            const image=book.imageLinks.thumbnail; 
                return (
                    <Book bookTitle={bookTitle} author={author} image={image}/>
                )
            })}                
            
        </div>
        
        </>
    )}

export default Shelf;