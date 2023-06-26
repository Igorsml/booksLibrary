import React, { useState } from "react";
import scss from "./BookCard.module.scss";
import { Counter } from "../Counter/Counter";
import { Link } from "react-router-dom";

export const BookCard = (props) => {
  const [bookCount, SetBookCount] = useState(0);
  const [bookPagesCount, SetPagesBookCount] = useState(0);
  const [booksId, SetBooksId] = useState([]);

  const handleFavorite = (bookId) => {
    if (booksId.indexOf(bookId) === -1) {
      SetBooksId((booksId) => [...booksId, bookId]);
    } else {
      console.log("includes");
      console.log("booksId:", booksId);
    }

    if (!booksId.includes(bookId)) {
      SetBookCount(bookCount + 1);
      SetPagesBookCount(bookPagesCount + props?.bookPageCount);
    }
  };

  console.log("bookPagesCount:", bookPagesCount);
  console.log("bookCount:", bookCount);

  try {
    return (
      <div className={scss.bookCard}>
        <Link to={props.bookHref} target="_blank" rel="noreferrer">
          <img className={scss.bookCardImg} src={props.bookImg} alt="img" />

          <h2>{props.bookTitle}</h2>
          {props.bookAuthor ? (
            <h3>Author: {props.bookAuthor}</h3>
          ) : (
            "Author: Unknown"
          )}
          {props.bookPublished && <p>Published: {props.bookPublished}</p>}
          {props.bookPageCount && <p>Pages: {props.bookPageCount}</p>}
        </Link>
        {props.bookPageCount && (
          <Counter
            handleCountIncrement={props?.handleCountIncrement}
            handleCountDecrement={props?.handleCountDecrement}
            bookPageCount={props.bookPageCount}
            booksCount={props.booksCount}
            isSearch={props.isSearch}
            bookId={props.bookId}
            handleFavorite={handleFavorite}
          />
        )}
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};
