import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BooksList extends Component {
  state = {
    filteredBooks: this.props.books
  };
  componentDidMount() {
    this.setState({ filteredBooks: this.props.books });
  }
  filterbooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };
  render() {
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterbooks} />
        <div className="row">
          {" "}
          <BookTable books={this.state.filteredBooks} />
        </div>
      </div>
    );
  }
}
export default BooksList;
