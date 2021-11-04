import React from "react";
import * as S from "./SearchedItem.elements";
import spotifyIcon from "./Spotify_Icon.png";

const SearchedItem = ({ index, title, artist, img, url, selectMusic }) => {
  return (
    <S.Container>
      <S.SelectButton onClick={() => selectMusic(index)}>선택</S.SelectButton>
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

export default SearchedItem;
