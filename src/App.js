import React, { useState } from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Searchbar from './components/Searchbar/Searchbar';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'Halo',
      artist: 'Porcupine Tree',
      album: 'Deadwing',
      id: 1,
      uri: 'spotify:track:0sh26WhJ5AUbIonujNQ4Yh'
    },
    {
      name: 'Metropolis Pt. 1',
      artist: 'Dream Theater',
      album: 'Images and Words',
      id: 2,
      uri: 'spotify:track:6nRCTb5b0N5zp8WTeY6xFZ'
    },
    {
      name: 'Golem',
      artist: 'Caligula\'s Horse',
      album: 'Charcoal Grace',
      id: 3,
      uri: 'spotify:track:0uAWaWSWkFrbayh1xsOzXB'
    },
    {
      name: 'Bridge Burning',
      artist: 'Foo Fighters',
      album: 'Wasting Light',
      id: 4,
      uri: 'spotify:track:0bHD1nLe7Nhw55ZGJ92332'
    }
  ]);

  const [selectedTracks, setSelectedTracks] = useState([]);
  const [playlist, setPlaylist] = useState({});
  const [playlistName, setPlaylistName] = useState('');
  const [uriList, setUriList] = useState(['spotify:track:0sh26WhJ5AUbIonujNQ4Yh', ]);

  const addTrack = (track) => {
    if (!selectedTracks.some((selectedTrack) => selectedTrack.id === track.id)) {
      setSelectedTracks([...selectedTracks, track]);
      setUriList([...uriList, track.uri]);
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

  const savePlaylist = (playlistName) => {
    setPlaylist({name: playlistName, tracks: uriList})
    clearPlaylist();
    console.log(`${playlist.name}: ${playlist.tracks}`)
  }
  
  const updateSearchResults = (newSearchResults) => {
    setSearchResults(newSearchResults);
  }

  return (
    <div className="App">
      <Navbar 
        playlists={playlist}
        // selectedPlaylist={selectedPlaylist}
        // updateSelectedPlaylist={updateSelectedPlaylist}
      />
      <Searchbar updateSearchResults={updateSearchResults}/>
      <div className="functionality_container">
        <SearchResults searchResults={searchResults} addTrack={addTrack} />
        <Playlist 
          selectedTracks={selectedTracks} 
          clearPlaylist={clearPlaylist}
          removeTrack={removeTrack} 
          playlistName={playlistName}
          updatePlaylistName={updatePlaylistName}
          savePlaylist={savePlaylist}
          // selectedPlaylist={selectedPlaylist}
          // deletePlaylist={deletePlaylist}
          // updateSelectedPlaylist={updateSelectedPlaylist}
        />
      </div>
    </div>
  );
}

export default App