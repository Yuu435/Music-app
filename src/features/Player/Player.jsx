import { usePlayer } from "../Hook/usePlayer";
import "./Player.css";
import PlayerSong from "./PlayerSong";
import PlayerAction from "./PlayerAction";
import PlayerAudio from "./PlayerAudio";

const Player = () => {
  const { currentSong, audioRef, onEnded, onTimeUpdate } = usePlayer();

  return (
    <div className="player-wrap">
      <audio
        src={currentSong.src}
        ref={audioRef}
        onTimeUpdate={(e) => onTimeUpdate(e.target.currentTime)}
        onEnded={onEnded}
      ></audio>

      <div className="player">
        <PlayerSong />

        <PlayerAction />

        <PlayerAudio />
      </div>
    </div>
  );
};

export default Player;
