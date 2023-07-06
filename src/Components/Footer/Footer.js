import react from "react";
import scss from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={scss.footer}>
      <p>© 2023</p>
      <a href="https://github.com/Igorsml/booksLibrary" target="_blank">
        Source code on github
      </a>
    </footer>
  );
};
