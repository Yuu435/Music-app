
import { usePlayer } from "../Hook/usePlayer";

const PlayerSong = () => {
  const { currentSong } = usePlayer();
  return (
    <div className="player-song">
      <div className="player-image">
        <img src={currentSong.thumbnail} alt={currentSong.title} />
      </div>
      <div className="player-title">
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
};

export default PlayerSong;
