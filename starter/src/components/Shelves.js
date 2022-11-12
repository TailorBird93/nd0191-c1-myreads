import React from "react"
import "../App.css"
import Shelf from "./Shelf"

const Shelves = ({books, setBooks}) => {
    return (
        <div className="list-books-content">
            <div>
              <Shelf title="Currently Reading" books={books} setBooks={setBooks}/>
              <Shelf title="Want to read" books={books} setBooks={setBooks}/>
              <Shelf title="Read" books={books} setBooks={setBooks}/>
                
                  
            </div>
          </div>
    )
}



export default Shelves