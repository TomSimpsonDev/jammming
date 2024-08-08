import React from 'react';
import './Track.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Track(props) {
  const { track, addOrRemoveTrack, type } = props;
  const plus = <FontAwesomeIcon icon={faPlus} />
  const minus = <FontAwesomeIcon icon={faMinus} />


  return (
    <div className="track" id={type + 'Track_' + track.id}>
      <div className="trackText">
        <div className="trackTopLine">
          <h4 className="trackTitle">{track.name}</h4>
          <div className="addTrack" onClick={() => addOrRemoveTrack(track)}>{type === 'results' ? plus : minus}</div>
        </div>
        <div className="trackInfo">
          <p>{track.artist}</p>
          <p>{track.album}</p>
        </div>
      </div>
      
      <div className="underscore"></div>
    </div>
  )
}
