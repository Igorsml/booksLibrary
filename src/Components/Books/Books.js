import React, { useState } from "react";
import { SearchArea } from "../SearchArea/SearchArea";
import { BooksList } from "../BooksList/BooksList";
import { SearchBooksList } from "../SearchArea/SearchBooksList";
import { Header } from "../Header/Header";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [booksTitles, setBooksTitles] = useState(false);

  return (
    <>
      {/* <SearchArea setBooks={setBooks} setBooksTitles={setBooksTitles} />
      <Header setBooks={setBooks} setBooksTitles={setBooksTitles} />
      <BooksList books={books} />
      {booksTitles && <SearchBooksList books={booksTitles} />} */}
    </>
  );
};
