import { createContext, useReducer } from "react";
import { playerReducer } from "../Reducer/playerReducer";

const initialPlayerState = {
  playing: false,
  currentTime: 0,
  currentSongIndex: 0,
  loop: false,
  shuffle: false,
  volume: 0.5,
};

export const PlayerContext = createContext();

export default function PlayerProvider({ children }) {
  const [state, dispatch] = useReducer(playerReducer, initialPlayerState);
  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
}
