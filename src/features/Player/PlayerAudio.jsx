import { FaVolumeUp, FaVolumeMute, FaVolumeDown } from "react-icons/fa";
import { usePlayer } from "../Hook/usePlayer";

const PlayerAudio = () => {
  const { volume, onVolumeChange, onToggleVolume } = usePlayer();
  return (
    <div className="player-audio">
      <span className="volume" onClick={onToggleVolume}>
        {volume == 0 ? (
          <FaVolumeMute />
        ) : volume < 0.5 ? (
          <FaVolumeDown />
        ) : (
          <FaVolumeUp />
        )}
      </span>
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={onVolumeChange}
      />
    </div>
  );
};

export default PlayerAudio;
