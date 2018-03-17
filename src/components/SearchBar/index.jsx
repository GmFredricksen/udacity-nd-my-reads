import React from 'react';

function SearchBar(props) {
  const { filterText, onFilterTextChange } = props;

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        value={filterText}
        onChange={onFilterTextChange}
      />
    </div>
  )
}

export default SearchBar;
