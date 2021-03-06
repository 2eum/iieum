import React from "react";
import * as S from "./PostCardS.elements";

const PostCardS = ({
  id,
  user,
  title,
  track_title,
  track_artist,
  track_album_cover,
  handleCardOpen,
  open
}) => {
  return (
    <S.PostCardArea onClick={() => handleCardOpen(id)} open={open}>
      <S.TopArea>
        <S.Author>{user}</S.Author>
      </S.TopArea>
      <S.MusicArea>
        <S.MusicCover src={track_album_cover}></S.MusicCover>
        <S.MusicInfoArea>
          <S.MusicTitleWrapper>
            {/* if title is longer than 10 letters, set slide animation to true */}
            <S.MusicTitle slide={track_title.length > 10}>
              {track_title}
            </S.MusicTitle>
          </S.MusicTitleWrapper>
          <S.MusicArtistWrapper>
            {/* if artist is longer than 10 letters, set slide animation to true */}
            <S.MusicArtist slide={track_artist.length > 10}>
              {track_artist}
            </S.MusicArtist>
          </S.MusicArtistWrapper>
        </S.MusicInfoArea>
      </S.MusicArea>
      <S.TitleArea>
        <S.ContentTitle>
          {title.length > 30 ? title.slice(0, 30) + "..." : title}
        </S.ContentTitle>
      </S.TitleArea>
    </S.PostCardArea>
  );
};

export default PostCardS;
