import React, { useState, useEffect, useRef } from 'react';
import * as S from './MusicCardGrid.elements';
import { MusicCard, MusicCardOpened } from '../../Components';
import axios from 'axios';

const MusicCardGrid = ({ currUser, token, userId, list }) => {
  const [content, setContent] = useState(null);
  const [openCard, setOpenCard] = useState(0);

  useEffect(() => {
    setContent();
    if (list && list.length) {
      setContent(list);
    }
  }, [list]);

  useEffect(() => {
    if (!list) {
      axios({
        method: 'get',
        url: `/api/recentmusic/6`,
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
          setContent(data['music list']);
        });
    }
  }, []);

  const handleClick = (clickedCard) => {
    setOpenCard(clickedCard);
    scrollToRef(cardContainer);
  };

  const MusicCardList = content
    ? content.map((c, i) => {
        return (
          <S.MusicCardWrapper
            key={i}
            onclick={() => handleClick(i)}
            open={openCard === i}
          >
            <MusicCard
              title={c[0]}
              artist={c[1]}
              cover={c[2]}
              source={c[3]}
              link={c[4]}
              cardIndex={i}
              handleClick={handleClick}
              open={openCard === i}
            />
          </S.MusicCardWrapper>
        );
      })
    : [];

  const cardContainer = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <>
      {content ? (
        <>
          <S.MusicListContainer ref={cardContainer}>
            {MusicCardList}
          </S.MusicListContainer>
          <MusicCardOpened
            currUser={currUser}
            token={token}
            userId={userId}
            cardIndex={openCard}
            title={content[openCard] ? content[openCard][0] : ''}
            artist={content[openCard] ? content[openCard][1] : ''}
            cover={content[openCard] ? content[openCard][2] : ''}
            source={content[openCard] ? content[openCard][3] : ''}
            link={content[openCard] ? content[openCard][4] : ''}
          />
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default MusicCardGrid;
