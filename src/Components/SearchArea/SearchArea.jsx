import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import scss from "./SearchArea.module.scss";
import axios from "axios";
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
  const navigate = useNavigate();
  const isSearch = false;

  const searchBook = (e) => {
    if (e.target.value.length > 1) {
      axios.get(`${API_URL}?q=${e.target.value}`).then((response) => {
        const { totalItems, items } = response.data;
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
    } else {
      setIsLoading(false);
      setBooksTitles(false);
    }
  };
  const fetchBooks = (e) => {
    e.preventDefault();
    axios
      .get(`${API_URL}?q=${e.target.value}&maxResults=${maxResults}`)
      .then((response) => {
        // navigate("/search");
        setBooks([...response.data.items]);
        setBooksTitles(false);
        setSearchValueResult(e.target[0].value);
      });
  };

  const onSearch = (value) => {
    const search = debouncedSearch;
    if (!value && message.length > 1) {
      setBooksTitles(false);
      debouncedSearch.cancel();
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setLoad(true);
      search(value, setBooksTitles, setIsLoading);
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
