import React from "react";
import css from "./BooksList.module.css";
import { BookCard } from "../BookCard/BookCard";

export class BooksList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.booksList}>
        {this.props.books.map((book) => {
          return (
            <BookCard
              ket={book.id}
              bookHref={book.volumeInfo.selfLink}
              bookImg={book.volumeInfo.imageLinks.thumbnail}
              bookTitle={book.volumeInfo.title}
              bookAuthor={book.volumeInfo.authors}
              bookPageCount={book.volumeInfo.pageCount}
              bookPublished={book.volumeInfo.publishedDate}
            />
          );
        })}
      </div>
    );
  }
}
