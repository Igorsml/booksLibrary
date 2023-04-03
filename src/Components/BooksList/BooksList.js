import React from "react";
import css from "./BooksList.module.css";
import { BookCard } from "../BookCard/BookCard";

export class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageCount: 0, booksCount: 0 };
  }

  handleCount = () => {
    this.setState({
      pageCount: this.state.pageCount,
      booksCount: this.state.booksCount + 1,
    });
  };

  render() {
    return (
      <div className={css.booksList}>
        <div className={css.headerBooksCounterContainer}>
          <div className={css.booksCounter}>
            Books counter: {0 && this.state.pageCount}
          </div>
          <div className={css.booksPagesCounter}>
            Pages counter: {0 && this.state.booksCount}
          </div>
        </div>
        {this.props.books.map((book) => {
          return (
            <BookCard
              ket={book.id}
              bookHref={book.volumeInfo.previewLink}
              bookImg={book.volumeInfo.imageLinks?.thumbnail}
              bookTitle={book.volumeInfo.title}
              bookAuthor={book.volumeInfo.authors}
              bookPageCount={book.volumeInfo.pageCount}
              bookPublished={book.volumeInfo.publishedDate}
              handleCount={this.handleCount}
              booksCount={this.state.booksCount}
              pageCount={this.state.booksCount}
            />
          );
        })}
      </div>
    );
  }
}
