import React from "react";
import css from "./BookCard.module.css";
import { Counter } from "../Counter/Counter";
import { observer } from "mobx-react-lite";
import { BooksCounter } from "../BooksCounter/BooksCounter";

const BookCard = observer(
  class BookCard extends React.Component {
    render() {
      return (
        <div className={css.bookCard}>
          <a href={this.props.bookHref} target="_blank" rel="noreferrer">
            <img
              className={css.bookCardImg}
              src={this.props.bookImg}
              alt="img"
            />
          </a>
          <div className={css.description}>
            <a href={this.props.bookHref} target="_blank" rel="noreferrer">
              <h2>{this.props.bookTitle}</h2>
            </a>
            {this.props.bookAuthor ? (
              <h3>Author: {this.props.bookAuthor}</h3>
            ) : (
              "Author: Unknown"
            )}
            {this.props.bookPublished && (
              <p>Published: {this.props.bookPublished}</p>
            )}
            {this.props.bookPageCount && (
              <p>Pages: {this.props.bookPageCount}</p>
            )}
            <BooksCounter />
            <Counter />
          </div>
        </div>
      );
    }
  }
);

export { BookCard };
