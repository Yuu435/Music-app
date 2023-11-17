import { FaShuffle, FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";
import { ImLoop } from "react-icons/im";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { usePlayer } from "../Hook/usePlayer";
import { formatTime } from "../../lib/formatTime";

const PlayerAction = () => {
  const {
    playing,
    currentTime,
    currentSong,
    onPlay,
    onPause,
    onNext,
    onPrev,
    onShuffle,
    onLoop,
    isLoop,
    onCurrentTimeChange,
    onMouseDown,
    onMouseUp,
  } = usePlayer();
  return (
    <div className="player-action">
      <div className="player-button">
        <button onClick={onShuffle}>
          <FaShuffle />
        </button>
        <button onClick={onPrev}>
          <GiPreviousButton />
        </button>
        <button onClick={playing ? onPause : onPlay}>
          {playing ? <FaRegCirclePause /> : <FaRegCirclePlay />}
        </button>
        <button onClick={onNext}>
          <GiNextButton />
        </button>
        <button>
          <ImLoop className={isLoop ? "active" : ""} onClick={onLoop} />
        </button>
      </div>

      <div className="player-duration">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          value={currentTime}
          min={0}
          max={currentSong.duration}
          step={1}
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
          onChange={onCurrentTimeChange}
        />
        <span>{formatTime(currentSong.duration)}</span>
      </div>
    </div>
  );
};

export default PlayerAction;
