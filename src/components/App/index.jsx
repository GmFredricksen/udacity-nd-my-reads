import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from '../MainPage';
import SearchPage from '../SearchPage';

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search" component={SearchPage} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
