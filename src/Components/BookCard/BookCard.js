import React from "react";
import css from "./BookCard.module.scss";
import { Counter } from "../Counter/Counter";

export const BookCard = (props) => {
  try {
    return (
      <div className={css.bookCard}>
        <a href={props.bookHref} target="_blank" rel="noreferrer">
          <img className={css.bookCardImg} src={props.bookImg} alt="img" />

          <div className={css.description}>
            <h2>{props.bookTitle}</h2>

            {props.bookAuthor ? (
              <h3>Author: {props.bookAuthor}</h3>
            ) : (
              "Author: Unknown"
            )}
            {props.bookPublished && <p>Published: {props.bookPublished}</p>}
            {props.bookPageCount && <p>Pages: {props.bookPageCount}</p>}
          </div>
        </a>
        <Counter
          handleCountIncrement={props.handleCountIncrement}
          handleCountDecrement={props.handleCountDecrement}
          bookPageCount={props.bookPageCount}
          pageCount={props.pageCount}
          booksCount={props.booksCount}
        />
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};
