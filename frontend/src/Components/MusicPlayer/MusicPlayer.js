import React, { useState, useRef, useEffect } from "react";
import * as S from "./MusicPlayer.elements";

const MusicPlayer = ({ source, postId, cols }) => {
  const audioSrc = useRef();
  const [playing, setPlay] = useState(false);
  const [timeStamp, setTimeStamp] = useState(0);
  const [width, setWidth] = useState(0);

  // play state toggle
  const handlePlay = () => {
    playing ? setPlay(false) : setPlay(true);
  };

  // play, pause music on play state change
  useEffect(() => {
    if (playing) audioSrc.current.play();
    else audioSrc.current.pause();
  }, [playing]);

  // on audio time update, change progress bar width
  useEffect(() => {
    setWidth(Math.floor((timeStamp / 30) * 100));
    if (timeStamp >= 30) setPlay(false);
  }, [timeStamp]);

  // on post card change and close, stop music
  useEffect(() => {
    setPlay(false);
    setTimeStamp(0);
  }, [postId, cols]);

  // floor time and set time stamp
  const handleTimeSet = (e) => {
    let time = Math.floor(e.target.currentTime);
    if (time !== timeStamp) setTimeStamp(time);
  };

  return (
    <>
      <S.SourceAudio
        src={source}
        ref={audioSrc}
        onTimeUpdate={(e) => {
          handleTimeSet(e);
        }}
      />
      <S.PlayerContainer>
        <S.PlayerButton onClick={handlePlay}>
          {/* play, pause icon toggle */}
          {playing ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </S.PlayerButton>
        <S.PlayerBase>
          <S.PlayerProgressBar width={width} />
        </S.PlayerBase>
      </S.PlayerContainer>
    </>
  );
};

export default MusicPlayer;
