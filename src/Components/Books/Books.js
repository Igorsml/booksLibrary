import React from "react";
import { SearchArea } from "../SearchArea/SearchArea";
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
      .then((data) => console.log(data));
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
      </div>
    );
  }
}
