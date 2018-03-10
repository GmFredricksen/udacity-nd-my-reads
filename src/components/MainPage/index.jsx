import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../utils/BooksAPI';
import Bookshelf from '../Bookshelf';
import './MainPage.css'

class MainPage extends Component {
  state = {
    error: null,
    allBooks: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ allBooks: books });
      });
  }

  filterBooksForShelf(books, shelf) {
    return books.filter((book) => book.shelf === shelf);
  }

  updateBookshelf = (bookToBeUpdated, updatedShelf) => {
    const { allBooks } = this.state;

    BooksAPI.update(bookToBeUpdated, updatedShelf)
      .then(() => {
        // TODO: how to use the returned arrays?
        const updatedBooks = allBooks.map((book) => {
          if (book.id === bookToBeUpdated.id) {
            book.shelf = updatedShelf;
          }
          return book;
        });
        this.setState({ allBooks: updatedBooks });
      });
  }

  render() {
    const { allBooks } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              books={this.filterBooksForShelf(allBooks, 'currentlyReading')}
              title="Currently Reading"
              updateBookshelf={this.updateBookshelf} />
            <Bookshelf
              books={this.filterBooksForShelf(allBooks, 'wantToRead')}
              title="Want to Read"
              updateBookshelf={this.updateBookshelf} />
            <Bookshelf
              books={this.filterBooksForShelf(allBooks, 'read')}
              title="Read"
              updateBookshelf={this.updateBookshelf} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    )
  }
}

export default MainPage;
