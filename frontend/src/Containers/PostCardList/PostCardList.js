import React, { useState, useEffect } from "react";
import { PostCardL, PostCardS } from "../../Components";
import * as S from "./PostCardList.elements";
import axios from "axios";

const PostCardList = ({ currUser, token, userId, questionId, list }) => {
  const [cols, setCols] = useState(5);
  const [content, setContent] = useState();
  const [cardLIndex, setCardLIndex] = useState();

  useEffect(() => {
    setContent();
    if (list && list.length) {
      setContent(list);
    }
  }, [list]);

  // only send axios request when no content is passed in
  useEffect(() => {
    if (!list) {
      axios({
        method: "get",
        url: `/api/postlist-question/${questionId}/0`,
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
    }
  }, [cols]);

  // card open, close functions
  const handleCardOpen = (id) => {
    if (cols === 5) setCols(2);
    setCardLIndex(id);
  };

  const handleCardClose = () => {
    setCols(5);
  };

  // if content is loaded, create post card s list
  const PostCardSItems = content
    ? content.map((c) => {
        return (
          <PostCardS
            key={c.id}
            user={c.user.nickname}
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
    <>
      {content ? (
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
      ) : (
        ""
      )}
    </>
  );
};

export default PostCardList;
