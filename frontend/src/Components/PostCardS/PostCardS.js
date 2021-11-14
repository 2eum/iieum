import React from "react";
import * as S from "./PostCardS.elements";

const PostCardS = ({
  user,
  title,
  track_title,
  track_artist,
  track_album_cover,
  handleCardOpen,
}) => {
  return (
    <S.PostCardArea onClick={handleCardOpen}>
      <S.TopArea>
        <S.Author>{user}</S.Author>
      </S.TopArea>
      <S.MusicArea>
        <S.MusicCover src={track_album_cover}></S.MusicCover>
        <S.MusicInfoArea>
          <S.MusicTitleWrapper>
            {track_title.length > 10 ? (
              <S.MusicTitle slide={true}>{track_title}</S.MusicTitle>
            ) : (
              <S.MusicTitle slide={false}>{track_title}</S.MusicTitle>
            )}
          </S.MusicTitleWrapper>
          <S.MusicArtistWrapper>
            {track_artist.length > 10 ? (
              <S.MusicArtist slide={true}>{track_artist}</S.MusicArtist>
            ) : (
              <S.MusicArtist slide={false}>{track_artist}</S.MusicArtist>
            )}
          </S.MusicArtistWrapper>
        </S.MusicInfoArea>
      </S.MusicArea>
      <S.TitleArea>
        <S.ContentTitle>{title}</S.ContentTitle>
      </S.TitleArea>
    </S.PostCardArea>
  );
};

export default PostCardS;
