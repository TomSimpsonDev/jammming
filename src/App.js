import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Searchbar from './components/Searchbar/Searchbar';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  return (
    <div className="App">
      <Searchbar />
      <SearchResults />
      <Tracklist />
      <Playlist />
    </div>
  );
}

export default App;
