import React from 'react';
import Book from '../Book';

function Bookshelf (props) {
  const { title, books, updateBookshelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map((book) => <Book key={book.id} book={book} updateBookshelf={updateBookshelf} />)
          }
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
