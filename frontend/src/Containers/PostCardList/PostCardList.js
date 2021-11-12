import React, { useState, useEffect } from "react";
import { PostCardL, PostCardS } from "../../Components";
import * as S from "./PostCardList.elements";
import axios from "axios";

const PostCardList = ({ currUser, token, userId }) => {
  const [cols, setCols] = useState(4);
  const [content, setContent] = useState(null);
  const [cardLIndex, setCardLIndex] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/postlist-question/2/0`,
      headers: {
        "Content-Type": "application/json",
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
      });
  }, [cols]);

  const handleCardOpen = (id) => {
    if (cols === 4) setCols(2);
    setCardLIndex(id);
  };

  const handleCardClose = () => {
    setCols(4);
  };

  const PostCardSItems = content
    ? content.map((c) => {
        return (
          <PostCardS
            key={c.id}
            user={c.user}
            title={c.title}
            handleCardOpen={(e) => handleCardOpen(c.id)}
          />
        );
      })
    : "";

  return (
    <S.CardListContainer>
      <S.GridContainer cols={cols}>{PostCardSItems}</S.GridContainer>
      {cardLIndex ? (
        <S.PostCardLContainer cols={cols}>
          <PostCardL
            currUser={currUser}
            token={token}
            userId={userId}
            postId={cardLIndex}
            handleCardClose={handleCardClose}
          />
        </S.PostCardLContainer>
      ) : (
        ""
      )}
    </S.CardListContainer>
  );
};

export default PostCardList;
