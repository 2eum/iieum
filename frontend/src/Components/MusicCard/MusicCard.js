import React from "react";
import * as S from "./MusicCard.elements";
import { MusicPlayer } from "..";
import spotifyIcon from "../../Components/SearchedItem/Spotify_Icon.png";

const MusicCard = ({ title, artist, source, link, cover, postId, cols }) => {
  return (
    <>
      <S.Wrapper>
        <S.Info>
          <S.TitleWrapper>
            {/* if title is longer than 10 letters, set slide animation to true */}
            <S.Title slide={title.length > 10}>{title}</S.Title>
          </S.TitleWrapper>

          <S.MiddleWrapper>
            <S.SourceLink href={link} target="_blank">
              <img src={spotifyIcon} />
            </S.SourceLink>
            <S.ArtistWrapper>
              {/* if artist is longer than 10 letters, set slide animation to true */}
              <S.Artist slide={artist.length > 10}>{artist}</S.Artist>
            </S.ArtistWrapper>
          </S.MiddleWrapper>
          {/* if no preview music, show message */}
          {source !== "null" || !source ? (
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
