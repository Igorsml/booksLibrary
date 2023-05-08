import React, { useState } from "react";
import { SearchArea } from "../SearchArea/SearchArea";
import { BooksList } from "../BooksList/BooksList";
import { SearchBooksList } from "../SearchArea/SearchBooksList";
import scss from "./Books.module.scss";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [booksTitles, setBooksTitles] = useState(false);

  return (
    <main className={scss.books}>
      <SearchArea setBooks={setBooks} setBooksTitles={setBooksTitles} />
      <BooksList books={books} />
      {booksTitles && <SearchBooksList books={booksTitles} />}
    </main>
  );
};
