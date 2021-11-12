import React from "react";
import * as S from "./PostCardS.elements";

const PostCardS = ({ user, title, handleCardOpen }) => {
  return (
    <S.PostCardArea onClick={handleCardOpen}>
      <S.TopArea>
        <S.Author>{user}</S.Author>
      </S.TopArea>
      <S.MusicArea>
        <S.MusicCover src="https://image.bugsm.co.kr/album/images/500/40591/4059180.jpg"></S.MusicCover>
        <S.MusicInfoArea>
          <S.MusicTitleWrapper>
            <S.MusicTitle>KNOCK(With 박문치dddd)</S.MusicTitle>
          </S.MusicTitleWrapper>
          <S.MusicArtist>권진아</S.MusicArtist>
        </S.MusicInfoArea>
      </S.MusicArea>
      <S.TitleArea>
        <S.ContentTitle>{title}</S.ContentTitle>
      </S.TitleArea>
    </S.PostCardArea>
  );
};

export default PostCardS;
