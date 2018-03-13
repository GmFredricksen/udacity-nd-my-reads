import React from 'react';

function SelectBookshelf(props) {
  const { book, updateBookshelf } = props;
  const selectionOptions = [ 'currentlyReading', 'wantToRead', 'read', 'none' ]

  return (
    <select value={book.shelf || 'none'} onChange={updateBookshelf}>
      <option value="" disabled>Move to...</option>
      {
        selectionOptions.map((option) => {
          return <option key={option} value={option}>{
            option.replace(/([a-z](?=[A-Z]))/g, '$1 ')
              .replace(/^[a-z]/g, (string) => string.toUpperCase())
          }</option>
        })
      }
    </select>
  )
}

export default SelectBookshelf;
