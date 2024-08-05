import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

export default function Tracklist() {
  return (
    <div>
      <h1 className={styles.tlist_title}>Tracklist</h1>
      <ul>
        <Track />
        <Track />
        <Track />
      </ul>
    </div>
  )
}
