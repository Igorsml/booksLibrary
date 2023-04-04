import React from "react";
import scss from "./SearchArea.module.scss";

export const SearchArea = (props) => {
  return (
    <div className={scss.searchArea}>
      <form onSubmit={props.searchBook} action="">
        <input
          className={scss.searchAreaInput}
          autoFocus
          onChange={props.handleSearch}
          type="search"
        />
        <button className={scss.SearchAreaButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
