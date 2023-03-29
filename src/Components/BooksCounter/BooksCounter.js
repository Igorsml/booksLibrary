import React from "react";
import css from "./BooksCounter.module.css";

export class BooksCounter extends React.Component {
  render() {
    return (
      <div className={css.headerBooksCounterContainer}>
        <div className={css.booksCounter}>
          Books counter: {this.props.bookPageCount}
        </div>
        <div className={css.booksPagesCounter}>Pages counter:</div>
      </div>
    );
  }
}
