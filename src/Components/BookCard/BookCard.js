import React from "react";
import scss from "./BookCard.module.scss";
import { Counter } from "../Counter/Counter";
import { Link } from "react-router-dom";

export const BookCard = (props) => {
  const handleFavorite = (bookId) => {
    if (props?.booksId.indexOf(bookId) === -1) {
      props?.SetBooksId((booksId) => [...booksId, bookId]);
      props?.SetBookCount(props?.booksCount + 1);
      props?.SetPagesCount(props?.pagesCount + props?.bookPageCount);
    }
  };

  const handleFavoriteRemove = (bookId) => {
    // props?.setBooksId((bookId) =>
    //   props?.booksId.filter((item) => item !== bookId)
    // );
    const index = props?.booksId.findIndex((id) => id === bookId);
    console.log("index:", index);
    if (index !== -1) {
      props?.SetBooksId([
        ...props?.booksId.slice(0, index),
        ...props?.booksId.slice(index + 1),
      ]);
      props?.SetBookCount(props?.booksCount - 1);
      props?.SetPagesCount(props?.pagesCount - props?.bookPageCount);
    }
  };

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
            handleFavoriteRemove={handleFavoriteRemove}
          />
        )}
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};
