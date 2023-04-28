import React, { useState } from "react";
import scss from "./SearchArea.module.scss";
import request from "superagent";
import debounce from "lodash.debounce";
import { BookCard } from "./../BookCard/BookCard";
const API_URL = "https://www.googleapis.com/books/v1/volumes";
const DEBOUNCE = 1000;

export const SearchArea = (props) => {
  const { setBooks, setBooksTitles } = props;
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        console.log(data.body);
        setBooks([...data.body.items]);
        setBooksTitles([]);
      });
  };

  const onSearch = (v) => {
    const search = debouncedSearch;
    if (!v) {
      debouncedSearch.cancel();
      setBooksTitles([]);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      search(v, setBooksTitles, setIsLoading);
    }
  };

  const debouncedSearch = debounce(searchBook, DEBOUNCE);

  const handleChange = (event) => {
    const deleteSymbols = "/[^a-zа-я0-9]+/g";
    const result = event.target.value.replace(deleteSymbols, "");

    if (event.target.value.match(/[^a-zа-я0-9]/gi, "")) {
      alert(
        `Ooops, you are typed ${event.target.value}. Please, only letters & numbers`
      );
    } else {
      setMessage(result);
    }
  };

  return (
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
          onFocus={() => setBooksTitles([])}
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
  );
};
