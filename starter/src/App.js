import "./App.css";
import { useState, useEffect } from "react";

import {getAll} from "./BooksAPI";

import SearchPage from "./components/SearchPage";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import OpenSearch from "./components/OpenSearch";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [books, setBooks] = useState([]);

  useEffect (() => {
    getAll().then((books) => {
      setBooks(books);
    })
  }, []);


  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage  showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>
      ) : (
        <div className="list-books">
          <Header />
          <Shelves books={books} setBooks={setBooks}/>
          <OpenSearch showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>
        </div>
      )}
    </div>
  );
}

export default App;
