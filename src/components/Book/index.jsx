import React, { Component } from 'react';
import BookCover from './BookCover';
import SelectBookshelf from '../SelectBookshelf';

class Book extends Component {
  updateBookshelf = (event) => {
    const { book, updateBookshelf } = this.props;

    updateBookshelf(book, event.target.value);
  }

  render() {
    const { book } = this.props;
    const { authors, imageLinks, title } = book;
  
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <BookCover
              bookTitle={title}
              imageLinks={imageLinks}
            />
            <div className="book-shelf-changer">
              <SelectBookshelf book={book} updateBookshelf={this.updateBookshelf} />
            </div>
          </div>
          <div className="book-title">{title}</div>
          {/* TODO: why using authors on search is breaking?
            <div className="book-authors">{authors.length > 1 ? [...authors] : authors[0]}</div>
          */}
        </div>
      </li>
    );
  }
}

export default Book;
