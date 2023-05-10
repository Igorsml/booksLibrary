import React from "react";
import css from "./Header.module.scss";
import { ReactComponent as SvgLogo } from "../assets/icons/Logo.svg";
import SignIn from "../googleSignIn/SignIn.js";

export const Header = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header className={css.headerContainer}>
      <a href="/">
        <SvgLogo className={css.headerLogo} />
      </a>
      <h1 className={css.headerTitle}>Books Library</h1>
      <SignIn />
      {/* && <button onClick={logout}></button> */}
    </header>
  );
};
