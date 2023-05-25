import React, { useState, useRef, useEffect } from "react";
import scss from "./SearchArea.module.scss";
import request from "superagent";
import debounce from "lodash.debounce";
import { BookCard } from "../BookCard/BookCard";
import preloader from "../../Components/assets/icons/Icons_search.gif";
const API_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = "AIzaSyCGdBrakyzRLdW3kBWnW3aibLiEk7rsO-s";
const maxResults = 3;
const DEBOUNCE = 1000;

export const SearchArea = (props) => {
  const { setBooks, setBooksTitles } = props;
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);
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
        setLoad(false);
      });
  };

  const fetchBooks = (e) => {
    e.preventDefault();
    request
      .get(`${API_URL}?=book&key=${API_KEY}&maxResults=${maxResults}`)
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
      setLoad(true);
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

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.code === "Escape") {
        setBooksTitles(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target) || e.key === "Escape") {
      setBooksTitles(false);
    }
  };

  return (
    <>
      <div className={scss.searchArea}>
        <form onSubmit={fetchBooks} action="">
          <input
            ref={ref}
            className={scss.searchAreaInput}
            autoFocus
            onInput={onSearch}
            type="search"
            placeholder="search"
            autoComplete="on"
            value={message}
            onChange={handleChange}
            onFocus={() => setBooksTitles(false)}
            onClick={handleClickOutside}
          />
          {isLoading && (
            <img className={scss.preloader} src={preloader} alt="Loading..." />
          )}
          <button
            disabled={load}
            className={scss.SearchAreaButton}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {searchValueResult && (
        <div className={scss.searchValueResult}>
          Search result(s) on «<span>{searchValueResult}</span>»
        </div>
      )}
    </>
  );
};
