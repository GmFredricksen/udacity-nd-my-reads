import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../utils/BooksAPI';
import SearchBar from '../SearchBar';
import Book from '../Book';
import './SearchPage.css';

class SearchPage extends Component {
  state = {
    filterText: '',
    emptySearchMessage: 'Nothing searched',
    searchedBooks: [],
  }

  handleFilterTextChange = (event) => {
    const filterText = event.target.value;
    console.log('handleFilterTextChange =>', filterText);
    this.setState({ filterText });
    if (filterText) {
      BooksAPI.search(filterText)
        .then((searchedBooks) => {
          if (!searchedBooks.hasOwnProperty('error')) {
            this.setState({ searchedBooks });
          } else {
            this.setState({
              searchedBooks: [],
              emptySearchMessage: 'Unfortunately your search did not match any book'
            });
          }
        })
    } else {
      this.setState({
        emptySearchMessage: 'Nothing searched',
        searchedBooks: [],
      });
    }
  }

  updateBookshelf = (bookToBeUpdated, updatedShelf) => {
    // const { allBooks } = this.state;

    BooksAPI.update(bookToBeUpdated, updatedShelf);
      // .then(() => {
        // TODO: how to use the returned arrays?
        // TODO: outsource this method into a utils class
        // const updatedBooks = allBooks.map((book) => {
        //   if (book.id === bookToBeUpdated.id) {
        //     book.shelf = updatedShelf;
        //   }
        //   return book;
        // });
        // this.setState({ allBooks: updatedBooks });
      // });
  }

  render() {
    console.log(this.props);
    const { emptySearchMessage, filterText, searchedBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <SearchBar
            filterText={filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { 
              searchedBooks.length
              ?
              searchedBooks.map((book) => <Book key={book.id} book={book} updateBookshelf={this.updateBookshelf} />)
              :
              <li>{emptySearchMessage}</li>
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
