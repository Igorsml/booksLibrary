import React, { useState } from "react";
import { SearchArea } from "../SearchArea/SearchArea";
import { BooksList } from "../BooksList/BooksList";
import request from "superagent";
import debounce from "lodash.debounce";

export function Books() {
  const [books, SetBooks] = useState([]);
  const [searchField, SetSearchField] = useState("");
  const pathURL = "https://www.googleapis.com/books/v1/volumes";

  const searchBook = (e) => {
    e.preventDefault();
    request
      .get(`${pathURL}`)
      .query({ q: searchField })
      .then((data) => {
        SetBooks([...data.body.items]);
      });
  };

  const handleSearch = (e) => {
    SetSearchField(e.target.value);
  };

  return (
    <div>
      <SearchArea searchBook={searchBook} handleSearch={handleSearch} />
      <BooksList books={books} />
    </div>
  );
}
