import React from "react";
import css from "./SearchArea.module.css";

export class SearchArea extends React.Component {
  render() {
    return (
      <div className={css.searchArea}>
        <form onSubmit={this.props.searchBook} action="">
          <input
            className={css.searchAreaInput}
            autoFocus
            onChange={this.props.handleSearch}
            type="search"
          />
          <button className={css.SearchAreaButton} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
