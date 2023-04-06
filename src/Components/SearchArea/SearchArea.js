import React, { useState } from "react";
import scss from "./SearchArea.module.scss";
import request from "superagent";
import debounce from "lodash.debounce";
const API_URL = "https://www.googleapis.com/books/v1/volumes";
const DEBOUNCE = 2000;

export const SearchArea = (props) => {
  const { setBooks, setBooksTitles } = props;
  const [isLoading, setIsLoading] = useState(false);

  const searchBook = (e) => {
    request
      .get(`${API_URL}`)
      .query({ q: e.target.value })
      .then((data) => {
        const { totalItems, items } = data.body;
        setIsLoading(false);
        setBooksTitles(totalItems ? items.map((i) => i.volumeInfo?.title) : []);
      });
  };

  const fetchBooks = (e) => {
    e.preventDefault();
    request
      .get(`${API_URL}`)
      .query({ q: e.target[0].value })
      .then((data) => {
        setBooks([...data.body.items]);
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
        />
        <button className={scss.SearchAreaButton} type="submit">
          Search
        </button>
        {props?.isLoading && (
          <span className="position-absolute  m-1">
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
