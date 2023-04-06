import React, { useState } from "react";
import { SearchArea } from "../SearchArea/SearchArea";
import { BooksList } from "../BooksList/BooksList";
import { SearchBooksList } from "../SearchArea/SearchListItem";
import request from "superagent";
import debounce from "lodash.debounce";
const API_URL = "https://www.googleapis.com/books/v1/volumes";
const DEBOUNCE = 1e3;

const debouncedSearch = debounce(searchBook, DEBOUNCE);

const AutoCompleteBooks = () => {
  const [books, SetBooks] = useState([]);
  const [results, setResults] = useState([]);
  const [searchField, SetSearchField] = useState("");
  const [isLoading, SetIsLoading] = useState(false);

  const searchBook = (e) => {
    e.preventDefault();
    request
      .get(`${API_URL}`)
      .query({ q: searchField })
      .then((data) => {
        const { totalItems, items } = data;
        SetIsLoading(false);
        SetBooks([...data.body.items]);
        setResults(totalItems ? items.map((i) => i.volumeInfo?.title) : []);
      });
  };

  const onSerach = (v) => {
    const search = debouncedSearch;
    if (!v) {
      debouncedSearch.cancel();
      setResults([]);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      search(v, setResults, setIsLoading);
    }
  };

  return (
    <div>
      <SearchArea searchBook={searchBook} handleSearch={handleSearch} />
      <BooksList books={books} />
      <SearchBooksList books={books} />
    </div>
  );
};

export default AutoCompleteBooks;
