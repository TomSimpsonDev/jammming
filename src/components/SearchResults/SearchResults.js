import React from 'react'
import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function SearchResults(props) {
  const { searchResults, addTrack } = props;

  const plus = <FontAwesomeIcon icon={faPlus} />

  return (
    <div className="searchResults_container">
      <h1 className="searchResults_title">Results</h1>
      <Tracklist searchResults={searchResults} addTrack={addTrack} />
    </div>
  )
}
