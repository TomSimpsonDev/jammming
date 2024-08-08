import React from 'react';
import styles from './Searchbar.module.css';

export default function Searchbar(props) {
  const { track, onTrackChange } = props;
  return (
    <div className={styles.trackSearch_container}>
      <input
        className={styles.trackSearch}
        name="track"
        value={track}
        placeholder="Track Name..."
        onChange={(e) => onTrackChange(e.target.value)}
      ></input>
    </div>
  )
}
