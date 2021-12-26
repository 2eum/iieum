import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './TodayQuestion.elements';

import { PostCardL, PostCardS } from '../../Components';
import { IndicatorDot } from '../../styles/globalStyles';

const TodayQuestion = ({ currUser, token, userId, setPageQuestion }) => {
  const [content, setContent] = useState([]);
  const [questionList, setQList] = useState([]);
  const [question, setQuestion] = useState();
  const [questionId, setQuestionId] = useState();
  const [todayQCards, setTodayQCards] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const [contentIdx, setIdx] = useState();
  const [cardLId, setCardLId] = useState();
  const [dayName, setDayName] = useState();
  const [noContent, setNoContent] = useState(false);

  const dayNames = ['오늘', '어제', '3일 전', '4일 전', '5일 전'];

  const today = new Date();
  const startingDate = new Date(today);
  startingDate.setDate(startingDate.getDate() - 4);
  // on Mount
  useEffect(() => {
    axios({
      method: 'get',
      url: `/api/questionlist/${startingDate.getFullYear()}-${
        startingDate.getMonth() + 1
      }-${startingDate.getDate()}/${today.getFullYear()}-${
        today.getMonth() + 1
      }-${today.getDate()}/0`,
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
        setQList(data);
      });
  }, []);

  // on question list change
  useEffect(() => {
    if (questionList[0]) {
      setQuestion(questionList[0].question_content);
      setQuestionId(questionList[0].id);
      setPageQuestion(questionList[0].id);
      setDayName(dayNames[0]);
    }
  }, [questionList]);

  // get 10 post of selected question
  useEffect(() => {
    if (questionId) {
      axios({
        method: 'get',
        url: `api/postlist-question/${questionId}/10`,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          setContent(response.data);
          return response.data;
        })
        .then((data) => (data[0] ? setCardLId(data[0].id) : ''))
        .then(() => setIdx(0))
        .catch((error) => {
          if (error.response.status === 404) {
            // !! 글 없음 표시하기
            setNoContent(true);
          } else {
            setPlaceholder('Something went wrong!');
          }
        });
    }
  }, [questionId]);

  // when content for today question is updated
  useEffect(() => {
    let arr = [];
    for (let c of content) {
      arr.push(
        <PostCardS
          key={c.id}
          id={c.id}
          user={c.user.nickname}
          title={c.title}
          track_title={c.track_title}
          track_artist={c.track_artist}
          track_album_cover={c.track_album_cover}
          handleCardOpen={switchCardL}
          open={cardLId === c.id}
        />,
      );
    }
    setTodayQCards([...arr]);
  }, [content, cardLId]);

  // when content is updated or idx of CardS has changed
  useEffect(() => {
    let indArr = [];
    for (let i = 0; i < Math.ceil(content.length / 2); i++) {
      indArr.push(<IndicatorDot key={i} selected={i * 2 === contentIdx} />);
    }
    setIndicators([...indArr]);
  }, [contentIdx, content]);

  // update CardS idx
  const handleTodayQCard = (d) => {
    let idx;
    if (d > 0) {
      idx =
        contentIdx === todayQCards.length - 1 ||
        contentIdx + 1 === todayQCards.length - 1
          ? 0
          : contentIdx + 2;
    } else {
      idx = contentIdx === 0 ? todayQCards.length - 1 : contentIdx - 2;
    }
    setIdx(idx);
  };

  // generate random idx for question
  const randomQuestion = () => {
    if (questionList.length > 1) {
      setContent([]);
      setTodayQCards([]);
      let qIdx;
      do {
        qIdx = Math.floor(Math.random() * 100) % questionList.length;
      } while (questionList[qIdx].id === questionId);

      setQuestion(questionList[qIdx].question_content);
      setQuestionId(questionList[qIdx].id);
      setPageQuestion(questionList[qIdx].id);
      setDayName(dayNames[qIdx]);
    }
  };

  // CardL switch when CardS clicked
  const switchCardL = (id) => {
    setCardLId(id);
  };

  return (
    <>
      <S.TodayLeftContainer>
        {content.length ? (
          <PostCardL
            postId={cardLId}
            currUser={currUser}
            userId={userId}
            token={token}
          />
        ) : (
          <S.EmptyContainer>
            <S.EmptyMessage>
              아직 이 질문에 대한 답이 없어요...
              <br />첫 이음의 작성자가 되어주실래요?
            </S.EmptyMessage>
          </S.EmptyContainer>
        )}
      </S.TodayLeftContainer>
      <S.TodayRightContainer>
        <S.QuestionArea>
          <S.ShuffleButton onClick={randomQuestion}>
            <i className="fas fa-random" />
            다른 질문 보기
          </S.ShuffleButton>
          <S.TodayQuestion>
            <S.QDate>{dayName}의 질문</S.QDate>
            <S.Question>{question}</S.Question>
            <S.AnswerButton smooth to="/#create">
              <i className="fa fa-pen" />
              질문에 답하기
            </S.AnswerButton>
          </S.TodayQuestion>
        </S.QuestionArea>
        {content.length ? (
          <S.PostCardSArea>
            <S.TodaySTop>
              <S.LoadMoreButtonContainer onClick={() => handleTodayQCard(-1)}>
                <i className="fas fa-chevron-left" />
              </S.LoadMoreButtonContainer>
              <S.PostCardSWrapper>
                {todayQCards[contentIdx]}
                {contentIdx + 1 < todayQCards.length
                  ? todayQCards[contentIdx + 1]
                  : ''}
              </S.PostCardSWrapper>
              <S.LoadMoreButtonContainer onClick={() => handleTodayQCard(1)}>
                <i className="fas fa-chevron-right" />
              </S.LoadMoreButtonContainer>
            </S.TodaySTop>
            <S.IndicatorWrapper>{indicators}</S.IndicatorWrapper>
          </S.PostCardSArea>
        ) : (
          ''
        )}
      </S.TodayRightContainer>
    </>
  );
};

export default TodayQuestion;
