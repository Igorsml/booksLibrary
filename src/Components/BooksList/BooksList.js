import React from "react";
// APIKey: AIzaSyCGdBrakyzRLdW3kBWnW3aibLiEk7rsO-s

export class BooksList extends React.Component {
  constructor(props) {
    super(props);
  }

  getBooks = async () => {
    const books = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:0735619670"
    )
      .then((response) => response.json())
      .then((data) => {
        for (const book of data) {
        }
      });
  };

  render() {
    return <button onClick={this.getBooks()}>Get Books</button>;
  }
}
