import React, { useState } from "react";
import scss from "./BooksList.module.scss";
import { BookCard } from "../BookCard/BookCard";

export const BooksList = (props) => {
  const [pagesCount, SetPagesCount] = useState(0);
  const [booksCount, SetBookCount] = useState(0);
  const [booksId, SetBooksId] = useState([]);
  // const [bookCount, SetBookCount] = useState(0);
  const [bookPagesCount, SetPagesBookCount] = useState(0);
  // const handleCountIncrement = (booksPages) => {
  //   SetPageCount(pageCount + booksPages);
  //   SetBookCount(booksCount + 1);
  // };

  // const handleCountDecrement = (booksPages) => {
  //   SetPageCount(pageCount - booksPages);
  //   SetBookCount(booksCount - 1);
  // };

  const isSearch = true;

  return (
    <>
      <div className={scss.booksWrap}>
        <div className={scss.BooksCounterContainer}>
          <div className={scss.booksCounter}>
            Books counter: {booksCount < 0 ? SetBookCount(0) : booksCount}
          </div>
          <div className={scss.booksPagesCounter}>
            Pages counter: {pagesCount < 0 ? SetPagesCount(0) : pagesCount}
          </div>
        </div>

        <div className={scss.booksList}>
          {props.books.map((book) => {
            try {
              return (
                <BookCard
                  key={book?.id}
                  bookHref={book.volumeInfo?.previewLink}
                  bookImg={book.volumeInfo.imageLinks?.thumbnail}
                  bookTitle={book.volumeInfo?.title}
                  bookAuthor={book.volumeInfo?.authors}
                  bookPageCount={book.volumeInfo?.pageCount}
                  bookPublished={book.volumeInfo?.publishedDate}
                  pagesCount={pagesCount}
                  booksCount={booksCount}
                  SetPagesCount={SetPagesCount}
                  SetBookCount={SetBookCount}
                  isSearch={isSearch}
                  bookId={book?.id}
                  booksId={booksId}
                  SetBooksId={SetBooksId}
                />
              );
            } catch (err) {
              console.error(err);
            }
          })}
        </div>
      </div>
    </>
  );
};
