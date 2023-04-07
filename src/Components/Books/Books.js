import React, { useState } from "react";
import { SearchArea } from "../SearchArea/SearchArea";
import { BooksList } from "../BooksList/BooksList";
import { SearchBooksList } from "../SearchArea/SearchBooksList";

const AutoCompleteBooks = () => {
  const [books, setBooks] = useState([]);
  const [booksTitles, setBooksTitles] = useState([]);

  return (
    <div>
      <SearchArea setBooks={setBooks} setBooksTitles={setBooksTitles} />
      <BooksList books={books} />
      {booksTitles.length && <SearchBooksList books={booksTitles} />}
    </div>
  );
};

export default AutoCompleteBooks;
