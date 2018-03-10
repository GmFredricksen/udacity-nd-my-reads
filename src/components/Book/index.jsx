import React, { Component } from 'react';
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
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <SelectBookshelf book={book} updateBookshelf={this.updateBookshelf} />
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{[...authors]}</div>
        </div>
      </li>
    );
  }
}

export default Book;
