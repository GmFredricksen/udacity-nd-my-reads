import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css'
import MainPage from '../MainPage';
import SearchPage from '../SearchPage';

class BooksApp extends React.Component {
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
