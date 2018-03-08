import React from 'react';
import SelectBookshelf from '../SelectBookshelf';

function Book (props) {
  const { authors, imageLinks, title } = props.book;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <SelectBookshelf />
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{[...authors]}</div>
      </div>
    </li>
  );
}

export default Book;
