import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTransaction, setSearchTransaction] = useState('');

  const handleChange = (e) => {
    setSearchTransaction(e.target.value);
  };

  const handleClick = () => {
    onSearch(searchTransaction);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search your recent transactions"
        value={searchTransaction}
        onChange={handleChange}
      />
<button onClick={handleClick} >search</button>
    </div>
  );
};

export default Search;