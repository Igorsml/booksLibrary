import React, { useState } from "react";
import scss from "./SearchArea.module.scss";
import request from "superagent";
import debounce from "lodash.debounce";
import { BookCard } from "./../BookCard/BookCard";
const API_URL = "https://www.googleapis.com/books/v1/volumes";
const DEBOUNCE = 500;

export const SearchArea = (props) => {
  const { setBooks, setBooksTitles } = props;
  const [message, setMessage] = useState("");
  const [searchValueResult, setSearchValueResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isSearch = false;

  const searchBook = (e) => {
    request
      .get(`${API_URL}`)
      .query({ q: e.target.value })
      .then((data) => {
        const { totalItems, items } = data.body;
        setIsLoading(false);
        setBooksTitles(
          totalItems
            ? items.map((book) => (
                <BookCard
                  key={book?.id}
                  bookHref={book.volumeInfo?.previewLink}
                  bookImg={book.volumeInfo.imageLinks?.thumbnail}
                  bookTitle={book.volumeInfo?.title}
                  bookAuthor={book.volumeInfo?.authors}
                  bookPageCount={book.volumeInfo?.pageCount}
                  bookPublished={book.volumeInfo?.publishedDate}
                  isSearch={isSearch}
                />
              ))
            : []
        );
      });
  };

  const fetchBooks = (e) => {
    e.preventDefault();
    request
      .get(`${API_URL}`)
      .query({ q: e.target[0].value })
      .then((data) => {
        setBooks([...data.body.items]);
        setBooksTitles(false);
        setSearchValueResult(e.target[0].value);
      });
  };

  const onSearch = (v) => {
    const search = debouncedSearch;
    if (!v) {
      setBooksTitles(false);
      debouncedSearch.cancel();
      setIsLoading(false);
    } else {
      setIsLoading(true);
      search(v, setBooksTitles, setIsLoading);
    }
  };

  const debouncedSearch = debounce(searchBook, DEBOUNCE);

  const handleChange = (event) => {
    const result = event.target.value
      .toLowerCase()
      .replace(/[^a-zа-я0-9 ]+/g, "");

    setMessage(result);
  };

  return (
    <>
      <div className={scss.searchArea}>
        <form onSubmit={fetchBooks} action="">
          <input
            className={scss.searchAreaInput}
            autoFocus
            onInput={onSearch}
            type="search"
            placeholder="search"
            autoComplete="on"
            value={message}
            onChange={handleChange}
            onFocus={() => setBooksTitles(false)}
          />
          <button className={scss.SearchAreaButton} type="submit">
            Search
          </button>
          {props?.isLoading && (
            <span>
              <div
                className="spinner-border spinner-border-small"
                role="status"
              />
            </span>
          )}
        </form>
      </div>
      {searchValueResult && (
        <div className={scss.searchValueResult}>
          Search result on «<span>{searchValueResult}</span>»
        </div>
      )}
    </>
  );
};
