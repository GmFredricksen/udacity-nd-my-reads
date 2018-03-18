import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../utils/BooksAPI';
import SearchBar from '../SearchBar';
import Book from '../Book';
import './SearchPage.css';

class SearchPage extends Component {
  state = {
    filterText: '',
    emptySearchMessage: 'Empty search',
    searchedBooks: [],
  }

  handleFilterTextChange = (event) => {
    const filterText = event.target.value;

    this.setState({ filterText });
    this.guardAgainstTooManyAPICallsOnInput();
  }

  guardAgainstTooManyAPICallsOnInput() {
    if (this.countDownTimerId) {
      clearTimeout(this.countDownTimerId);
    }
    this.countDownTimerId = setTimeout(() => {
      this.updateSearchResults(this.state.filterText);
    }, 500);
  }

  updateSearchResults(filterText) {
    if (filterText) {
      BooksAPI.search(filterText)
        .then((searchedBooks) => {
          if (searchedBooks.hasOwnProperty('error')) {
            this.setState({
              searchedBooks: [],
              emptySearchMessage: 'Unfortunately your search did not match any book 😓',
            });
          } else {
            this.setState({
              searchedBooks,
              emptySearchMessage: '',
            });
          }
        })
        .catch(() => {
          this.setState({
            searchedBooks: [],
            emptySearchMessage: 'There was an error while performing the search, please try again in few moments.',
          });
        });
    } else {
      this.setState({
        searchedBooks: [],
        emptySearchMessage: 'Empty search.',
      });
    }
  }

  checkIfSearchedBookIsAlreadyInShelf(searchedBook) {
    const { myBooks } = this.props;
    const myBooksIds = myBooks.map(book => book.id);

    return myBooksIds.includes(searchedBook.id) && myBooks.find(myBook => myBook.id === searchedBook.id)
  }

  render() {
    const { updateBookshelf } = this.props;
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
              searchedBooks.map((searchedBook) => {
                return <Book
                  key={searchedBook.id}
                  book={this.checkIfSearchedBookIsAlreadyInShelf(searchedBook) || searchedBook}
                  updateBookshelf={updateBookshelf}
                />
              })
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
