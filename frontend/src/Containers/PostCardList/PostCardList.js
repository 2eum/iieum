import React, { useState, useEffect, useRef } from 'react';
import { PostCardL, PostCardS } from '../../Components';
import * as S from './PostCardList.elements';
import axios from 'axios';

const PostCardList = ({ currUser, token, userId, questionId, list, width }) => {
  const [cols, setCols] = useState(5);
  const [content, setContent] = useState();
  const [cardLIndex, setCardLIndex] = useState();
  const [isOpened, setIsOpened] = useState(false);
  const [hasNoContent, setHasNoContent] = useState(false);

  useEffect(() => {
    setContent();
    if (list && list.length) {
      setContent(list);
    }
  }, [list]);

  // only send axios request when no content is passed in
  useEffect(() => {
    if (questionId) {
      if (!list) {
        axios({
          method: 'get',
          url: `/api/postlist-question/${questionId}/0`,
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.status > 400) {
              setPlaceholder('Something went wrong!');
            }
            return response.data;
          })
          .then((data) => {
            if (Array.isArray(data)) setContent(data);
          })
          .then(() => setHasNoContent(false))
          .catch((error) => {
            setHasNoContent(true);
          });
      }
    }
  }, [cols]);

  const cardListCardContainer = useRef(null);
  const scrollToCardL = (ref) =>
    window.scrollTo(0, ref.current.offsetParent.offsetTop + 210);
  const scrollToCardS = (ref) =>
    window.scrollTo(0, ref.current.offsetParent.offsetTop - 140);

  // card open, close functions
  const handleCardOpen = (id) => {
    if (cols === 5) setCols(2);
    setCardLIndex(id);
    setIsOpened(true);
    width < 1280 ? scrollToCardL(cardListCardContainer) : '';
  };

  const handleCardClose = () => {
    setCols(5);
    setIsOpened(false);
    setCardLIndex(null);
    width < 1280 ? scrollToCardS(cardListCardContainer) : '';
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
            open={isOpened && cardLIndex === c.id}
          />
        );
      })
    : '';

  return (
    <>
      {content ? (
        <S.CardListContainer ref={cardListCardContainer}>
          {width >= 1280 ? (
            <S.GridContainer cols={cols}>{PostCardSItems}</S.GridContainer>
          ) : (
            <S.FlexContainer>{PostCardSItems}</S.FlexContainer>
          )}

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
            ''
          )}
        </S.CardListContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default PostCardList;
