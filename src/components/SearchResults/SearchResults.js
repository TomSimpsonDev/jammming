import React from 'react'
import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist'

export default function SearchResults(props) {
  const { searchResults, addTrack } = props;


  return (
    <div className="searchResults_container">
      <h1 className="searchResults_title">Results</h1>
      <Tracklist searchResults={searchResults} addTrack={addTrack} />
    </div>
  )
}
