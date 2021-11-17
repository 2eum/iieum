import React from "react";
import * as S from "./SearchedItem.elements";
import spotifyIcon from "./Spotify_Icon.png";

const SearchedItem = ({ index, title, artist, img, url, selectMusic }) => {
  return (
    <S.Container>
      <S.Cover src={img} alt="cover-art" />
      <S.RightWrapper>
        <S.Title>{title}</S.Title>
        <S.Artist>{artist}</S.Artist>
        <S.ButtonWrapper>
          <a href={url} target="_blank">
            <S.Link src={spotifyIcon} />
          </a>
          <S.SelectButton onClick={() => selectMusic(index)}>
            선택
          </S.SelectButton>
        </S.ButtonWrapper>
      </S.RightWrapper>
    </S.Container>
  );
};

export default SearchedItem;
