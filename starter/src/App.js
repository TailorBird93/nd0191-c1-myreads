import "./App.css";
import { useState } from "react";

import SearchPage from "./components/SearchPage";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import OpenSearch from "./components/OpenSearch";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage  showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>
      ) : (
        <div className="list-books">
          <Header />
          <Shelves />
          <OpenSearch showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>
        </div>
      )}
    </div>
  );
}

export default App;
