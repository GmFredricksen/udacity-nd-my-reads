import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as BooksAPI from '../../utils/BooksAPI';
import MainPage from '../MainPage';
import SearchPage from '../SearchPage';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => this.setState({ books }));
  }

  updateBookshelf = (bookToBeUpdated, updatedShelf) => {
    BooksAPI.update(bookToBeUpdated, updatedShelf)
      .then(() => {
        BooksAPI.getAll()
          .then((books) => this.setState({ books }));
      });
  }

  render() {
    const { books } = this.state;

    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={() => <MainPage books={books} updateBookshelf={this.updateBookshelf} />} />
          <Route exact path="/search" render={() => <SearchPage myBooks={books} updateBookshelf={this.updateBookshelf} />} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
