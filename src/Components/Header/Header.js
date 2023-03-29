import React from "react";
import css from "./Header.module.css";
import { BooksCounter } from "../BooksCounter/BooksCounter";
import { ReactComponent as SvgLogo } from "../../assets/icons/Logo.svg";

export class Header extends React.Component {
  render() {
    return (
      <header className={css.headerContainer}>
        <SvgLogo className={css.headerLogo} />
        <h1 className={css.headerTitle}>Vsesoki</h1>
        <BooksCounter />
      </header>
    );
  }
}
