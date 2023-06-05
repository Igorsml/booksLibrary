import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import scss from "./SearchArea.module.scss";
import request from "superagent";
import debounce from "lodash.debounce";
import { BookCard } from "../BookCard/BookCard";
import preloader from "../../Components/assets/icons/Icons_search.gif";
import { keys } from "../../config.js";

const API_URL = "https://www.googleapis.com/books/v1/volumes";
const maxResults = 3;
const DEBOUNCE = 500;

export const SearchArea = (props) => {
  const { setBooks, setBooksTitles } = props;
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);
  const [searchValueResult, setSearchValueResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isSearch = false;

  const handleChange = (event) => {
    const result = event.target.value
      .toLowerCase()
      .replace(/[^a-zа-я0-9 ]+/g, "");

    setMessage(result);
  };

  const searchBook = (e) => {
    e.preventDefault();
    console.log("message length: " + message.length);
    if (message.length <= 1) {
      setLoad(false);
      setIsLoading(false);
      return;
    }
    try {
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
    } catch (err) {
      console.error(err);
    }
  };

  const fetchBooks = (e) => {
    if (message.length <= 1) {
    }

    e.preventDefault();
    navigate("/books-search");
    request
      .get(`${API_URL}?=book&key=${keys.API_KEY}&maxResults=${maxResults}`)
      .query({ q: e.target[0].value })
      .then((data) => {
        setBooks([...data.body.items]);
        setBooksTitles(false);
        setSearchValueResult(e.target[0].value);
      });
  };

  const onSearch = (v) => {
    if (message.length <= 1) {
      setLoad(false);
      setIsLoading(false);
    }

    const search = debouncedSearch;

    if (!v) {
      debouncedSearch.cancel();
      debouncedSearch2.cancel();
      setBooksTitles(false);
      setLoad(false);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setLoad(true);
      search(v, setBooksTitles, setIsLoading);
    }
  };

  const debouncedSearch = debounce(searchBook, DEBOUNCE);
  const debouncedSearch2 = debounce(fetchBooks, DEBOUNCE);

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
