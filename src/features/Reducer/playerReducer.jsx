import { song } from "../../Data/song";

export const PLAYER = {
  PLAY: "player/play",
  PAUSE: "player/pause",
  NEXT: "player/next",
  PREV: "player/prev",
  SHUFFLE: "player/shuffle",
  LOOP: "player/loop",
  ADJUST_TIME: "player/adjustTime",
  SET_SONG: "player/setSong",
  ADJUST_VOLUME: "player/adjustVolume",
  TOGGLE_VOLUME: "player/toggleVolume",
};

// { playing: false, currentTime: 0, currentSong: 1, loop: false, shuffle: false, volume: 0.5 }

export const playerReducer = (state, action) => {
  switch (action.type) {
    case PLAYER.PLAY: {
      return {
        ...state,
        playing: true,
      };
    }
    case PLAYER.PAUSE: {
      return {
        ...state,
        playing: false,
      };
    }
    case PLAYER.NEXT: {
      let nextSongIndex = state.currentSongIndex + 1;
      if (nextSongIndex >= song.length) {
        nextSongIndex = 0;
      }
      return {
        ...state,
        currentSongIndex: nextSongIndex,
        playing: true,
      };
    }
    case PLAYER.PREV: {
      let prevSongIndex = state.currentSongIndex - 1;
      if (prevSongIndex < 0) {
        prevSongIndex = song.length - 1;
      }
      return {
        ...state,
        currentSongIndex: prevSongIndex,
        playing: true,
      };
    }
    case PLAYER.SHUFFLE: {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * song.length);
      } while (randomIndex === state.currentSongIndex);
      return {
        ...state,
        shuffle: !state.shuffle,
        currentSongIndex: randomIndex,
        playing: true,
      };
    }
    case PLAYER.LOOP: {
      return {
        ...state,
        loop: !state.loop,
      };
    }
    case PLAYER.ADJUST_TIME: {
      return {
        ...state,
        currentTime: action.payload.currentTime,
      };
    }

    case PLAYER.ADJUST_VOLUME: {
      return {
        ...state,
        volume: action.payload.volume,
      };
    }
    case PLAYER.TOGGLE_VOLUME: {
      return {
        ...state,
        volume: state.volume === 0 ? 0.5 : 0,
      };
    }

    case PLAYER.SET_SONG:{
      const songIndex = song.findIndex(
        (song) => song.id === action.payload.song.id
      );
      return {
        ...state,
        currentSongIndex: songIndex,
        playing: true,
      };
    }
    

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};
