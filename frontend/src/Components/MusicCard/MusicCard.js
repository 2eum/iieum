import React from "react";
import * as S from "./MusicCard.elements";
import { MusicPlayer } from "..";
import spotifyIcon from "../../Components/SearchedItem/Spotify_Icon.png";

const MusicCard = ({ title, artist, source, link, cover }) => {
  return (
    <>
      <S.Wrapper>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.MiddleWrapper>
            <S.SourceLink href={link} target="_blank">
              <img src={spotifyIcon} />
            </S.SourceLink>
            <S.Artist>{artist}</S.Artist>
          </S.MiddleWrapper>
          <MusicPlayer source={source} />
        </S.Info>
        <S.Cover src={cover} />
      </S.Wrapper>
    </>
  );
};

export default MusicCard;
