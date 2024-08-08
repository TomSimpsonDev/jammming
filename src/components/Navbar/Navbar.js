import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
//   const { 
//     playlist,
//     selectedPlaylist, 
//     updateSelectedPlaylist 
//     } = props;

  return (
    <div>
        <h1 className="logo">Ja<span className="mSpan">mmm</span>ing</h1>
        {/* <select 
            id="playlistSelect" 
            className={`${playlists.length === 0 ? "hidden" : ""}`} 
            name="currentPlaylist"
            onChange={(e) => updateSelectedPlaylist(e.target.value)}>
            <option value="" disabled selected>Choose a playlist</option>
            {playlists.length > 0 && playlists.map((playlist, i) => 
                <option 
                    value={playlist.playlistName} 
                    key={'playlist_' + i} 
                >{playlist.playlistName}</option>    
            )}
        </select> */}
    </div>
  )
}
