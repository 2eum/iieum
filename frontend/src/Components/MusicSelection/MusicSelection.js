import React from "react";
import * as S from "./MusicSelection.elements";
import spotifyIcon from "../SearchedItem/Spotify_Icon.png";

const MusicSelection = ({ title, artist, img, url, preview }) => {
  return (
    <S.Container>
      <S.Cover src={img} alt="cover-art" />
      <S.RightWrapper>
        <S.Title>{title}</S.Title>
        <S.Artist>{artist}</S.Artist>
        <a href={url} target="_blank">
          <S.Link src={spotifyIcon} />
          스포티파이로
        </a>
      </S.RightWrapper>
    </S.Container>
  );
};

export default MusicSelection;
