import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from '../Bookshelf';
import './MainPage.css'

class MainPage extends Component {
  filterBooksForShelf(books, shelf) {
    return books.filter((book) => book.shelf === shelf);
  }

  render() {
    const { books, updateBookshelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              books={this.filterBooksForShelf(books, 'currentlyReading')}
              title="Currently Reading"
              updateBookshelf={updateBookshelf} />
            <Bookshelf
              books={this.filterBooksForShelf(books, 'wantToRead')}
              title="Want to Read"
              updateBookshelf={updateBookshelf} />
            <Bookshelf
              books={this.filterBooksForShelf(books, 'read')}
              title="Read"
              updateBookshelf={updateBookshelf} />
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
