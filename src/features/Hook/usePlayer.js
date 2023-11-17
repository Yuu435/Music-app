import { useContext, useEffect, useRef } from "react";
import { PLAYER } from "../Reducer/playerReducer";
import { PlayerContext } from "../Context/MusicAppProvider";
import { song } from "../../Data/song";

export const usePlayer = () => {
  const { state, dispatch } = useContext(PlayerContext);

  // Truy cap the audio
  const audioRef = useRef();
  const { playing, currentSongIndex, currentTime } = state;
  // Dong bo trang thai playing voi audio
  useEffect(() => {
    const audioEle = audioRef.current;
    if (!audioEle) return;
    if (playing) {
      audioEle.play();
    } else {
      audioEle.pause();
    }
  }, [playing, currentSongIndex]);
  // loop
  useEffect(() => {
    const audioEle = audioRef.current;
    if (!audioEle) return;
    if (playing && audioEle.paused) {
      audioEle.play();
    }
  }, [playing, currentTime]);
  // mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume;
    }
  }, [state.volume]);

  const handlePlay = () => {
    dispatch({ type: PLAYER.PLAY });
  };
  const handlePause = () => {
    dispatch({ type: PLAYER.PAUSE });
  };
  const handleNext = () => {
    dispatch({ type: PLAYER.NEXT });
  };
  const handlePrev = () => {
    dispatch({ type: PLAYER.PREV });
  };
  const toggleShuffle = () => {
    dispatch({ type: PLAYER.SHUFFLE });
  };
  const toggleLoop = () => {
    dispatch({ type: PLAYER.LOOP });
  };
  const handleEnded = () => {
    if (state.loop) {
      dispatch({ type: PLAYER.ADJUST_TIME, payload: { currentTime: 0 } });
    } else {
      dispatch({ type: PLAYER.NEXT });
    }
  };

  const handleTimeUpdate = (currentTime) => {
    dispatch({ type: PLAYER.ADJUST_TIME, payload: { currentTime } });
  };
  const handleMouseDown = () => {
    audioRef.current.muted = true;
  };
  const handleMouseUp = () => {
    audioRef.current.muted = false;
  };
  const handleCurrentTimeChange = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  const handleVolumeChange = (e) => {
    dispatch({
      type: PLAYER.ADJUST_VOLUME,
      payload: { volume: e.target.value },
    });
    audioRef.current.volume = e.target.value;
  };
  const toggleVolume = () => {
    dispatch({ type: PLAYER.TOGGLE_VOLUME });
  };
  const handleChooseSong = (song) => {
    dispatch({ type: PLAYER.SET_SONG, payload: { song } });
  };

  const currentSong = song[state.currentSongIndex];
  const isLoop = state.loop;

  return {
    ...state,
    currentSong,
    audioRef,
    isLoop,
    onPlay: handlePlay,
    onPause: handlePause,
    onNext: handleNext,
    onPrev: handlePrev,
    onShuffle: toggleShuffle,
    onLoop: toggleLoop,
    onEnded: handleEnded,
    onTimeUpdate: handleTimeUpdate,
    onCurrentTimeChange: handleCurrentTimeChange,
    onVolumeChange: handleVolumeChange,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onToggleVolume: toggleVolume,
    onChooseSong: handleChooseSong,
  };
};
