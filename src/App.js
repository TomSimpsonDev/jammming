import React, { useState, useEffect } from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Searchbar from './components/Searchbar/Searchbar';
import Navbar from './components/Navbar/Navbar';
import Spotify from './util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [playlist, setPlaylist] = useState({});
  const [playlistName, setPlaylistName] = useState('');
  const [uriList, setUriList] = useState(['spotify:track:0sh26WhJ5AUbIonujNQ4Yh', ]);
  const [isTokenReady, setIsTokenReady] = useState(false);

  useEffect(() => {
    const token = Spotify.getAccessToken();
    console.log('token: ' + token);
    if (token) {
      setIsTokenReady(true);
    }
  }, []);

  const search = async (searchTerm) => {
    if (!isTokenReady) {
      console.log('Token not ready, cannot search.');
      return
    }
    if (searchTerm !== '') {
      console.log(`Searching for ${searchTerm}`);
      const tracks = await Spotify.search(searchTerm);
      console.log(`Search results: ${tracks.length} tracks found`);
      setSearchResults(tracks);
    } else {
      setSearchResults([]);
    }
  };

  const addTrack = (track) => {
    if (!selectedTracks.some((selectedTrack) => selectedTrack.id === track.id)) {
      setSelectedTracks([...selectedTracks, track]);
      setUriList([...uriList, track.uri]);
      console.log(uriList);
    }
  }

  const removeTrack = (track) => {
    const updatedSelectedTracks = selectedTracks.filter(selectedTrack => selectedTrack.id !== track.id);
    setSelectedTracks(updatedSelectedTracks);
  }

  const clearPlaylist = () => {
    const playlistInput = document.getElementById("playlist_titleInput");
    playlistInput.value = "";
    setPlaylistName("");
    setSelectedTracks([]);
    setUriList([]);
  }
  
  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  }

  const savePlaylist = async () => {
    const userId = await Spotify.getUserId();
    const playlistId = await Spotify.createPlaylist(userId, playlistName);
    const trackUris = uriList;

    await Spotify.addTracksToPlaylist(userId, playlistId, trackUris);

    setPlaylistName('');
    setSelectedTracks([]);
    const playlistInput = document.getElementById('playlist_titleInput');
    playlistInput.value = '';
  }

  return (
    <div className="App">
      <Navbar 
        playlists={playlist}
      />
      <Searchbar onSearch={search}/>
      <div className="functionality_container">
        <SearchResults 
          searchResults={searchResults} 
          addTrack={addTrack} 
          searchValue={searchValue}
        />
        <Playlist 
          selectedTracks={selectedTracks} 
          clearPlaylist={clearPlaylist}
          removeTrack={removeTrack} 
          playlistName={playlistName}
          updatePlaylistName={updatePlaylistName}
          savePlaylist={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App