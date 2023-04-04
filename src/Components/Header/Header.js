import React from "react";
import css from "./Header.module.css";
import { ReactComponent as SvgLogo } from "../assets/icons/Logo.svg";

export const Header = () => {
  return (
    <header className={css.headerContainer}>
      <SvgLogo className={css.headerLogo} />
      <h1 className={css.headerTitle}>Books Library</h1>
    </header>
  );
};
