import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../utils/BooksAPI';
import Bookshelf from '../Bookshelf';
import './MainPage.css'

class MainPage extends Component {
  state = {
    error: null,
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          currentlyReadingBooks: books.filter((book) => book.shelf === 'currentlyReading'),
          wantToReadBooks: books.filter((book) => book.shelf === 'wantToRead'),
          readBooks: books.filter((book) => book.shelf === 'read'),
        });
      });
  }

  render() {
    const { currentlyReadingBooks, wantToReadBooks, readBooks } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              books={currentlyReadingBooks}
              title="Currently Reading" />
            <Bookshelf
              books={wantToReadBooks}
              title="Want to Read" />
            <Bookshelf
              books={readBooks}
              title="Read" />
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
