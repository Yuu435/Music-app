import PlayerProvider from "./features/Context/MusicAppProvider";
import Player from "./features/Player/Player";
import PlayList from "./features/PlayList/PlayList";

const App = () => {
  return (
    <PlayerProvider>
      <Player />
      <PlayList />
    </PlayerProvider>
  );
};

export default App;
