import "./App.css";
import { useState, useEffect } from "react";

import {getAll, update} from "./BooksAPI";

import SearchPage from "./components/SearchPage";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import OpenSearch from "./components/OpenSearch";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [books, setBooks] = useState([]);



  async function handleChange (book, shelf) {
    await update(book, shelf);
    setBooks(books.filter( b => b.id !== book.id ).concat({...book, shelf}))};

  useEffect (() => {
    getAll().then((books) => {
      setBooks(books);
    })
  }, []);

  console.log(books);


  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage  showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>
      ) : (
        <div className="list-books">
          <Header />
          <Shelves books={books} setBooks={setBooks} handleChange={handleChange}/>
          <OpenSearch showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>
        </div>
      )}
    </div>
  );
}

export default App;
