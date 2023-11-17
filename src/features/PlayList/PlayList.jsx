import { song } from "../../Data/song";
import { formatTime } from "../../lib/formatTime";
import { usePlayer } from "../Hook/usePlayer";
import "./PlayList.css";

const PlayList = () => {
  const { currentSong, onChooseSong } = usePlayer();
  return (
    <div className="playlist">
      {song.map((song, index) => (
        <div
          className="playlist-wrap"
          key={song.id}
          style={{
            background:
              currentSong.id === song.id ? "rgb(102, 102, 102)" : "none",
          }}
          onClick={() => onChooseSong(song)}
        >
          <div className="playlist-index">{index + 1}</div>
          <div className="playlist-img">
            <img
              src={song.thumbnail}
              alt={song.title}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
          <div className="playlist-title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="playlist-duration">{formatTime(song.duration)}</div>
        </div>
      ))}
    </div>
  );
};

export default PlayList;
