import React from "react";
import css from "./Header.module.scss";
import { ReactComponent as SvgLogo } from "../assets/icons/Logo.svg";

export const Header = () => {
  return (
    <header className={css.headerContainer}>
      <a href="/">
        <SvgLogo className={css.headerLogo} />
      </a>
      <h1 className={css.headerTitle}>Books Library</h1>
    </header>
  );
};
