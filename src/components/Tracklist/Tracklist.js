import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

export default function Tracklist(props) {
  const {  searchResults, addTrack } = props;

  return (
    <div className={styles.tlist}>
      {searchResults.map((track) => <Track track={track} addOrRemoveTrack={addTrack} type={'results'} key={track.id} />)}
    </div> 
  )
}
