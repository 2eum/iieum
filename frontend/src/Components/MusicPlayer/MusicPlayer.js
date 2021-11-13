import React, { useState, useRef, useEffect } from "react";
import * as S from "./MusicPlayer.elements";

const MusicPlayer = ({ source }) => {
  const audioSrc = useRef();
  const [playing, setPlay] = useState(false);
  const [timeStamp, setTimeStamp] = useState(0);
  const [width, setWidth] = useState(0);

  const handlePlay = () => {
    playing ? setPlay(false) : setPlay(true);
  };

  useEffect(() => {
    if (playing) audioSrc.current.play();
    else audioSrc.current.pause();
  }, [playing]);

  useEffect(() => {
    setWidth(Math.floor((timeStamp / 30) * 100));
    if (timeStamp >= 30) setPlay(false);
  }, [timeStamp]);

  const handleTimeSet = (e) => {
    let time = Math.floor(e.target.currentTime);
    if (time !== timeStamp) setTimeStamp(time);
  };

  const progressBarComponent = <S.PlayerProgressBar width={width} />;

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
          {playing ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </S.PlayerButton>
        <S.PlayerBase>{progressBarComponent}</S.PlayerBase>
      </S.PlayerContainer>
    </>
  );
};

export default MusicPlayer;
