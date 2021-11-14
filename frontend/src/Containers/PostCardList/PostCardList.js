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
      url: `/api/postlist-question/1/0`,
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
        if (Array.isArray(data)) setContent(data);
      });
  }, [cols]);

  // card open, close functions
  const handleCardOpen = (id) => {
    if (cols === 4) setCols(2);
    setCardLIndex(id);
  };

  const handleCardClose = () => {
    setCols(4);
  };

  // if content is loaded, create post card s list
  const PostCardSItems = content
    ? content.map((c) => {
        return (
          <PostCardS
            key={c.id}
            user={c.user}
            title={c.title}
            track_title={c.track_title}
            track_artist={c.track_artist}
            track_album_cover={c.track_album_cover}
            handleCardOpen={(e) => handleCardOpen(c.id)}
          />
        );
      })
    : "";

  return (
    <S.CardListContainer>
      <S.GridContainer cols={cols}>{PostCardSItems}</S.GridContainer>
      {/* show post card l if card is selected */}
      {cardLIndex ? (
        <S.PostCardLContainer cols={cols}>
          <PostCardL
            currUser={currUser}
            token={token}
            userId={userId}
            postId={cardLIndex}
            handleCardClose={handleCardClose}
            cols={cols}
          />
        </S.PostCardLContainer>
      ) : (
        ""
      )}
    </S.CardListContainer>
  );
};

export default PostCardList;
