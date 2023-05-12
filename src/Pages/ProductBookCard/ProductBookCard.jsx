import React, { useParams } from "react";
import scss from "./ProductBookCard.module.scss";
import { Counter } from "../../Components/Counter/Counter";
import { Link } from "react-router-dom";

export const ProductBookCard = (props) => {
  const { id } = useParams();

  try {
    return (
      <div className={scss.bookCard}>
        <Link to={props.bookHref} target="_blank" rel="noreferrer">
          <img className={scss.bookCardImg} src={props.bookImg} alt="img" />

          <div className={scss.description}>
            <h2>{props.bookTitle}</h2>

            {props.bookAuthor ? (
              <h3>Author: {props.bookAuthor}</h3>
            ) : (
              "Author: Unknown"
            )}
            {props.bookPublished && <p>Published: {props.bookPublished}</p>}
            {props.bookPageCount && <p>Pages: {props.bookPageCount}</p>}
          </div>
        </Link>
        {props.bookPageCount && (
          <Counter
            handleCountIncrement={props?.handleCountIncrement}
            handleCountDecrement={props?.handleCountDecrement}
            bookPageCount={props.bookPageCount}
            pageCount={props.pageCount}
            booksCount={props.booksCount}
            isSearch={props.isSearch}
          />
        )}
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};
