import React from "react";
import { SearchArea } from "../SearchArea/SearchArea";
import { BooksList } from "../BooksList/BooksList";
import request from "superagent";

export class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }
  pathURL = "https://www.googleapis.com/books/v1/volumes";

  searchBook = (e) => {
    e.preventDefault();
    request
      .get(`${this.pathURL}`)
      .query({ q: this.state.searchField })
      .then((data) => {
        this.setState({ books: [...data.body.items] });
      });
  };

  handleSearch = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <BooksList books={this.state.books} />
      </div>
    );
  }
}
