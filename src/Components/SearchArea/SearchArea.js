import React from "react";
import scss from "./SearchArea.module.scss";

export const SearchArea = (props) => {
  return (
    <div className={scss.searchArea}>
      <form onSubmit={props.searchBook} action="">
        <input
          className={scss.searchAreaInput}
          autoFocus
          onChange={props.debouncedResults}
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
