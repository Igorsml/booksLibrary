import React from "react";
import css from "./BookCard.module.css";

export class BookCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.bookCard}>
        <a href={this.props.bookHref}>
          <img className={css.bookCardImg} src={this.props.bookImg} alt="img" />
          <div className={css.description}>
            <h2>Title: {this.props.bookTitle}</h2>
            <h3>Author: {this.props.bookAuthor}</h3>
            <p>Date published: {this.props.bookPublished}</p>
            <p>Page count: {this.props.bookPageCount}</p>
          </div>
        </a>
      </div>
    );
  }
}
