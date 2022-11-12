import React from "react"
import "../App.css"
import Shelf from "./Shelf"

const Shelves = ({books, handleChange}) => {
    const currentlyReading=books.filter((book)=>book.shelf==="currentlyReading");
    const wantToRead=books.filter((book)=>book.shelf==="wantToRead");
    const read=books.filter((book)=>book.shelf==="read");
    return (
        <div className="list-books-content">
            <div>
              <Shelf title="Currently Reading" books={currentlyReading} handleChange={handleChange}/>
              <Shelf title="Want to read" books={wantToRead} handleChange={handleChange}/>
              <Shelf title="Read" books={read}  handleChange={handleChange}/>
                
                  
            </div>
          </div>
    )
}



export default Shelves