import React, { useState, useEffect } from "react";
import { PostCardL, PostCardS } from "../../Components";
import * as S from "./PostCardList.elements";
import axios from "axios";

const PostCardList = ({ currUser, token, userId }) => {
  const [cols, setCols] = useState(4);
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/postlist-question`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        pk: "1",
        limit: "0",
      },
    })
      .then((response) => {
        if (response.status > 400) {
          setPlaceholder("Something went wrong!");
        }
        return response.data;
      })
      .then((data) => {
        setContent(data);
        return data;
      })
      .then(() => {
        setLoad(true);
      });
  }, []);

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
        <PostCardL
          currUser={currUser}
          token={token}
          userId={userId}
          postId={1}
          handleCardClose={handleCardClose}
        />
      </S.PostCardLContainer>
    </S.CardListContainer>
  );
};

export default PostCardList;
