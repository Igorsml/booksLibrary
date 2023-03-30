import React from "react";
import css from "./BooksCounter.module.css";

export class BooksCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageCount: 0, booksCount: 0 };
  }
  render() {
    return (
      <div className={css.headerBooksCounterContainer}>
        <div className={css.booksCounter}>
          Books counter: {0 && this.state.pageCount}
        </div>
        <div className={css.booksPagesCounter}>
          Pages counter: {0 && this.state.booksCount}
        </div>
      </div>
    );
  }
}
