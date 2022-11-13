import React from "react";
import "../App.css"
import Book from "./Book";

const OpenSearch = ({showSearchPage, setShowSearchpage}) => {
    return (
        <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
        </div>
    )
}

export default OpenSearch