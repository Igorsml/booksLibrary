import React from "react";
import css from "./Header.module.css";
import { ReactComponent as SvgLogo } from "../../assets/icons/Logo.svg";

export class Header extends React.Component {
  render() {
    return (
      <header className={css.headerContainer}>
        <SvgLogo className={css.headerLogo} />
        <h1 className={css.headerTitle}>Books LIbrary</h1>
      </header>
    );
  }
}
