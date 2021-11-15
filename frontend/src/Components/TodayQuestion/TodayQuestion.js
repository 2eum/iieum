import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./TodayQuestion.elements";
import * as g from "../../globalStyles";

import { PostCardL, PostCardS } from "../../Components";

const TodayQuestion = ({ currUser, token, userId }) => {
  const [content, setContent] = useState([]);
  const [questionList, setQList] = useState([]);
  const [question, setQuestion] = useState();
  const [questionId, setQuestionId] = useState();
  const [todayQCards, setTodayQCards] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const [contentIdx, setIdx] = useState();
  const [cardLId, setCardLId] = useState();
  // on Mount
  useEffect(() => {
    axios({
      method: "get",
      url: "/api/question/past",
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
        setQList(data);
      });
  }, []);

  // on question list change
  useEffect(() => {
    if (questionList[0]) {
      setQuestion(questionList[0].question_content);
      setQuestionId(questionList[0].id);
    }
  }, [questionList]);

  // get 10 post of selected question
  useEffect(() => {
    if (questionId) {
      axios({
        method: "get",
        url: `api/postlist-question/${questionId}/10`,
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
          user={c.user}
          title={c.title}
          track_title={c.track_title}
          track_artist={c.track_artist}
          track_album_cover={c.track_album_cover}
          handleCardOpen={switchCardL}
        />
      );
    }
    setTodayQCards([...arr]);
    setIdx(0);
    if (content[0]) {
      setCardLId(content[0].id);
    }
  }, [content]);

  // when content is updated or idx of CardS has changed
  useEffect(() => {
    let indArr = [];
    for (let i = 0; i < Math.ceil(content.length / 2); i++) {
      indArr.push(<g.IndicatorDot key={i} selected={i * 2 === contentIdx} />);
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
    setContent([]);
    setTodayQCards([]);
    let qIdx;
    do {
      qIdx = Math.floor(Math.random() * 100) % questionList.length;
    } while (questionList[qIdx].id === questionId);

    setQuestion(questionList[qIdx].question_content);
    setQuestionId(questionList[qIdx].id);
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
          ""
        )}
      </S.TodayLeftContainer>
      <S.TodayRightContainer>
        <S.QuestionArea>
          <S.ShuffleButton onClick={randomQuestion}>
            <i className="fas fa-random"></i>
          </S.ShuffleButton>
          <S.TodayQuestion>
            <S.QDate>오늘의 질문</S.QDate>
            <S.Question>{question}</S.Question>
          </S.TodayQuestion>
        </S.QuestionArea>
        <S.PostCardSArea>
          <S.TodaySTop>
            <S.LoadMoreButtonContainer onClick={() => handleTodayQCard(-1)}>
              <i className="fas fa-chevron-left" />
            </S.LoadMoreButtonContainer>
            <S.PostCardSWrapper>
              {todayQCards[contentIdx]}
              {contentIdx + 1 < todayQCards.length - 1
                ? todayQCards[contentIdx + 1]
                : ""}
            </S.PostCardSWrapper>
            <S.LoadMoreButtonContainer onClick={() => handleTodayQCard(1)}>
              <i className="fas fa-chevron-right" />
            </S.LoadMoreButtonContainer>
          </S.TodaySTop>
          <S.IndicatorWrapper>{indicators}</S.IndicatorWrapper>
        </S.PostCardSArea>
      </S.TodayRightContainer>
    </>
  );
};

export default TodayQuestion;