import React from 'react';

function BookCover (props) {
  const { bookTitle, imageLinks } = props;

  return (
    <div
      className="book-cover"
      style={{ width: 128, height: 193 }}
    >
      <img width="100%" height="100%" src={imageLinks.smallThumbnail} alt={bookTitle} />
    </div>
  )
}

export default BookCover;
