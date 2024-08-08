import React from 'react';
import styles from './Playlist.css';
import Track from '../Track/Track';

export default function Playlist(props) {
  const { 
    playlist,
    selectedTracks, 
    clearPlaylist,
    removeTrack, 
    playlistName, 
    updatePlaylistName, 
    savePlaylist
    // updateSelectedPlaylist,
    // selectedPlaylist,
    // deletePlaylist
   } = props;


  return (
    <div className="playlist_container" id={'playlist_container'}>
      <div className="playlist_titleContainer">
        <h1 className="playlist_title">Playlist:</h1>
        <input 
          id="playlist_titleInput"
          type="text"
          placeholder="Enter name here" 
          name="playlist" 
          onChange={(e) => updatePlaylistName(e.target.value)}
        />
      </div>
      <button 
        className={`${"saveBtn"} ${selectedTracks.length !== 0 ? "" : "hidden" }`} 
        onClick={() => savePlaylist(playlistName, selectedTracks)}
      >Save Playlist</button>

      <button
        className={`${"clearBtn"} ${selectedTracks.length === 0 ? "hidden" : ""}`}
        onClick={clearPlaylist}
      >Clear</button>

      {/* <button 
        className={`${"deleteBtn"} ${selectedPlaylist === '' ? "hidden" : ""}`}
        onClick={playlist => deletePlaylist(playlist)}
      >X</button> */}

      {selectedTracks.map((track) => 
        <Track track={track} addOrRemoveTrack={removeTrack} type={'playlist'} key={track.id} />
      )}
    </div>
  )
}
