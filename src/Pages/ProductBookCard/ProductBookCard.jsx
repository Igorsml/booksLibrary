import React, { useState, useEffect } from "react";
import scss from "./ProductBookCard.module.scss";
import { Counter } from "../../Components/Counter/Counter";
import BooksList from "../../Components/BooksList/BooksList";
import { Link, useParams, useNavigate } from "react-router-dom";
import request from "superagent";
const API_URL = "https://www.googleapis.com/books/v1/volumes";

export const ProductBookCard = () => {
  const [book, setBooks] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, [id]);

  try {
    return (
      <>
        <button onClick={goBack}>Go Back</button>
        <h1>{book?.volumeInfo?.title}</h1>
        <Link to={book?.bookHref} target="_blank" rel="noreferrer">
          <img
            className={scss.bookCardImg}
            src={book.volumeInfo.imageLinks?.medium}
            alt="img"
          />
          <div className={scss.description}>
            {book?.volumeInfo?.authors.join("") ? (
              <h3>Author: {book?.volumeInfo?.authors.join("")}</h3>
            ) : (
              "Author: Unknown"
            )}
            {book?.volumeInfo?.publishedDate && (
              <p>Published: {book?.volumeInfo?.publishedDate}</p>
            )}
            {book?.volumeInfo?.pageCount && (
              <p>Pages: {book?.volumeInfo?.pageCount}</p>
            )}
          </div>
        </Link>
        {book.accessInfo?.epub?.downloadLink && (
          <Link
            to={book.accessInfo?.pdf?.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Link>
        )}
      </>
    );
  } catch (err) {
    console.error(err);
  }
};
