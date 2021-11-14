import React from "react";
import * as S from "./MusicCard.elements";
import { MusicPlayer } from "..";
import spotifyIcon from "../../Components/SearchedItem/Spotify_Icon.png";

const MusicCard = ({ title, artist, source, link, cover, postId, cols }) => {
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
          {source !== "null" ? (
            <MusicPlayer source={source} postId={postId} cols={cols} />
          ) : (
            <S.NoPreviewSrc>미리듣기 음원이 없습니다</S.NoPreviewSrc>
          )}
        </S.Info>
        <S.Cover src={cover} />
      </S.Wrapper>
    </>
  );
};

export default MusicCard;
