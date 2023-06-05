import React, { useState } from "react";
import scss from "./BooksList.module.scss";
import { BookCard } from "../BookCard/BookCard";

export const BooksList = (props) => {
  const [pageCount, SetPageCount] = useState(0);
  const [booksCount, SetBookCount] = useState(0);

  const handleCountIncrement = (booksPages) => {
    SetPageCount(pageCount + booksPages);
    SetBookCount(booksCount + 1);
  };

  const handleCountDecrement = (booksPages) => {
    SetPageCount(pageCount - booksPages);
    SetBookCount(booksCount - 1);
  };
  const isSearch = true;

  return (
    <>
      <div className={scss.booksWrap}>
        <div className={scss.BooksCounterContainer}>
          <div className={scss.booksCounter}>
            Books counter: {booksCount < 0 ? SetBookCount(0) : booksCount}
          </div>
          <div className={scss.booksPagesCounter}>
            Pages counter: {pageCount < 0 ? SetPageCount(0) : pageCount}
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
                  handleCountIncrement={handleCountIncrement}
                  handleCountDecrement={handleCountDecrement}
                  pageCount={pageCount}
                  booksCount={booksCount}
                  isSearch={isSearch}
                  bookId={book?.id}
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
