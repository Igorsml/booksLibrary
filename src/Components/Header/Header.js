import React from "react";
import scss from "./Header.module.scss";
import "../Layout/Layout.module.scss";
import { ReactComponent as SvgLogo } from "../assets/icons/Logo.svg";
import SignIn from "../googleSignIn/SignIn.js";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header className={scss.headerContainer}>
      <NavLink to="/">
        <SvgLogo className={scss.headerLogo} />
      </NavLink>
      <h1 className={scss.headerTitle}>Books Library</h1>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/my-books">My books</NavLink>
      {/* <SignIn /> */}
      {/* && <button onClick={logout}></button> */}
    </header>
  );
};
