import React, { useState } from "react";
import scss from "./Header.module.scss";
import "../../Pages/Home/Home.module.scss";
import { ReactComponent as SvgLogo } from "../assets/icons/Logo.svg";
import { UserAuth } from "../../Context/AuthContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { SearchArea } from "../../Components/SearchArea/SearchArea";
import { BooksList } from "../BooksList/BooksList";
import { SearchBooksList } from "../SearchArea/SearchBooksList";

export const Header = (props) => {
  const [books, setBooks] = useState([]);
  const [booksTitles, setBooksTitles] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    navigate(0);
  };

  const handleSignOut = () => {
    try {
      logOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <header className={scss.headerContainer}>
        <Link onClick={goHome}>
          <SvgLogo className={scss.headerLogo} />
        </Link>
        <h1 className={scss.headerTitle}>Books Library</h1>
        <div className={scss.headerLinks}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/my-books">My books</NavLink>
          <NavLink to="/books/f1xXAAAAcAAJ">Book card demo</NavLink>
          {user && (
            <Link to="/signin">
              <img
                className={scss.headerUserAvatar}
                src={user?.photoURL}
                alt="user avatar"
              />
            </Link>
          )}
          {user?.displayName ? (
            <button onClick={handleSignOut}>Logout</button>
          ) : (
            <NavLink to="/signin">Login</NavLink>
          )}
        </div>
      </header>
      <SearchArea setBooks={setBooks} setBooksTitles={setBooksTitles} />
      <BooksList books={books} />
      {booksTitles && <SearchBooksList books={booksTitles} />}
    </>
  );
};
