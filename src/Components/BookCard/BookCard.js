import React from "react";
import css from "./BookCard.module.scss";
import { Counter } from "../Counter/Counter";

export const BookCard = (props) => {
  return (
    <div className={css.bookCard}>
      <a href={props.bookHref} target="_blank" rel="noreferrer">
        <img className={css.bookCardImg} src={props.bookImg} alt="img" />
      </a>
      <div className={css.description}>
        <a href={props.bookHref} target="_blank" rel="noreferrer">
          <h2>{props.bookTitle}</h2>
        </a>
        {props.bookAuthor ? (
          <h3>Author: {props.bookAuthor}</h3>
        ) : (
          "Author: Unknown"
        )}
        {props.bookPublished && <p>Published: {props.bookPublished}</p>}
        {props.bookPageCount && <p>Pages: {props.bookPageCount}</p>}

        <Counter
          handleCountIncrement={props.handleCountIncrement}
          handleCountDecrement={props.handleCountDecrement}
          bookPageCount={props.bookPageCount}
          pageCount={props.pageCount}
          booksCount={props.booksCount}
        />
      </div>
    </div>
  );
};
