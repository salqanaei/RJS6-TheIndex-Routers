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
    let books = [];
    if (this.props.match.params.bookCOLOR) {
      const bookCOLOR = this.props.match.params.bookCOLOR.toLowerCase();
      let coloredBooks = this.state.filteredBooks.filter(
        book => book.color === bookCOLOR
      );
      books = <BookTable books={coloredBooks} />;
    } else {
      books = <BookTable books={this.state.filteredBooks} />;
    }
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterbooks} />
        <div className="row">{books}</div>
      </div>
    );
  }
}
export default BooksList;
