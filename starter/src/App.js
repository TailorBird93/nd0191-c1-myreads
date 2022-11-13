import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";

import {getAll, update, search} from "./BooksAPI";
import Book from "./components/Book";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import OpenSearch from "./components/OpenSearch";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [books, setBooks] = useState([]);


  const [findBooks, setFindBooks] = useState([]);

  const lookForBook= async (e) => {
    const response = await search(e.target.value, 0);
      if (Array.isArray(response)) {
        setFindBooks(response);
        document.getElementById("noBooks").innerHTML="Matching Titles:"
      } else {
        setFindBooks([]);
        document.getElementById("noBooks").innerHTML="No Matching Titles. Please enter a valid name"
      }
  } 



  async function handleChange (book, shelf) {
    await update(book, shelf);
    setBooks(books.filter( b => b.id !== book.id ).concat({...book, shelf}))};

  useEffect (() => {
    getAll().then((books) => {
      setBooks(books);
    })
  }, []);
  
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => setShowSearchpage(!showSearchPage)}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={lookForBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <h2 id="noBooks"></h2>
          <ol className="books-grid">
            {findBooks.map((book) => <Book book={book} key={book.id} handleChange = {handleChange} />)}
          </ol>
        </div>
      </div>
      ) : (
        <div className="list-books">
          <Header />
          <Shelves books={books} setBooks={setBooks} handleChange={handleChange}/>
          <OpenSearch showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage} handleChange={handleChange}/>
        </div>
      )}
    </div>
  );
}

export default App;
