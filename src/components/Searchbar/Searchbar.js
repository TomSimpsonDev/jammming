import React, { useState } from 'react';
import './Searchbar.css';

export default function Searchbar(props) {
  const [searchTermInput, setSearchTermInput] = useState('');
  const { track, onSearch } = props;
  return (
    <div className="trackSearch_container">
      <input
        className="trackSearch"
        name="track"
        value={track}
        placeholder="Track Name..."
        onChange={(e) => setSearchTermInput(e.target.value)}
      ></input>
      <button 
        className="searchBtn"
        onClick={() => onSearch(searchTermInput)}
      >Search</button>
    </div>
  )
}
