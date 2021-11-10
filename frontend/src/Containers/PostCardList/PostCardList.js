import React, { useState } from "react";
import { PostCardL, PostCardS } from "../../Components";
import * as S from "./PostCardList.elements";

const PostCardList = () => {
  const [cols, setCols] = useState(4);

  const handleCardOpen = () => {
    if (cols === 4) setCols(2);
  };

  const handleCardClose = () => {
    setCols(4);
  };

  return (
    <S.CardListContainer>
      <S.GridContainer cols={cols}>
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
        <PostCardS handleCardOpen={handleCardOpen} />
      </S.GridContainer>
      <S.PostCardLContainer cols={cols}>
        <PostCardL handleCardClose={handleCardClose} />
      </S.PostCardLContainer>
    </S.CardListContainer>
  );
};

export default PostCardList;
