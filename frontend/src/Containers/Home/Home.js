import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./Home.elements";
import * as com from "../../Components";
import * as g from "../../globalStyles";
import { PostCardList } from "..";

const Home = ({ currUser, token, userId, postId }) => {
  const [content, setContent] = useState(null);
  const [questionList, setQList] = useState([]);
  const [question, setQuestion] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [loaded, setLoad] = useState(false);
  const [contentIdx, setIdx] = useState(0);
  const [placeholder, setPlaceholder] = useState("Loading Content");

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
        const sortedArray = [...data];
        sortedArray.sort((a, b) => sortByLatest(a, b));
        setQList(sortedArray);
      });

    axios({
      method: "get",
      url: "/api/post/",
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
      })
      .then(() => {
        setLoad(true);
      });
  }, []);

  // on question list change
  useEffect(() => {
    if (questionList[0]) {
      setQuestion(questionList[0].question_content);
      setQuestionId(questionList[0].id);
    }
  }, [questionList]);

  const sortByLatest = (a, b) => {
    const a_date = new Date(a.released_date);
    const b_date = new Date(b.released_date);

    if (a_date > b_date) {
      return -1;
    } else if (b_date > a_date) {
      return 1;
    } else {
      return 0;
    }
  };

  const changeArticle = (direction) => {
    const last = content.length - 1;

    const changeIdx = direction === "prev" ? contentIdx - 1 : contentIdx + 1;

    if (changeIdx > last) {
      setIdx(0);
      return;
    } else if (changeIdx < 0) {
      setIdx(last);
      return;
    } else {
      setIdx(changeIdx);
    }
  };

  const today = new Date();
  const todayString = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <>
      <S.Background>

        {/* 1.Question Page */}
        <S.TodayQuestionPageSection>
            {/* <com.PostCardL/> */}
            <S.RightContainer>
              <S.QuestionArea>
                <S.ShuffleButton className="fa fa-shuffle"/>
                <S.TodayQuestion>
                  <S.QDate>오늘의 질문</S.QDate>
                  <S.Question>{question}</S.Question>
                </S.TodayQuestion>
              </S.QuestionArea>
              <S.PostCardSArea>
                {/* <S.PostCardSWrapper>
                  <S.LoadMoreButtonContainer>
                    <h3>&lt;</h3>
                  </S.LoadMoreButtonContainer>
                  <com.PostCardS/><com.PostCardS/>
                  <S.LoadMoreButtonContainer>
                    <h3>&gt;</h3>
                  </S.LoadMoreButtonContainer>
                </S.PostCardSWrapper> */}
                <S.IndicatorWrapper>
                  <p>Indicator</p>
                </S.IndicatorWrapper>
              </S.PostCardSArea>
            </S.RightContainer>
          </S.TodayQuestionPageSection>
          <PostCardList currUser={currUser} token={token} userId={userId} />

          {/* 2.Create Page */}
          <S.CreatePageSection>
            <S.CreateCardLeft>
              <S.HelperQuestionArea/>
              <S.HelperSearchArea/>
              <S.HelperContentArea>
                <S.HelperLeft>
                  당신의 이야기를 들려주세요.
                  어떤 내용이든 좋아요.
                  아주 사소한 것부터 깊은 속마음까지,
                  떠오르는 대로 적어볼까요?
                </S.HelperLeft>
              </S.HelperContentArea>
              <S.HelperDoneArea/>
            </S.CreateCardLeft>
            <com.CreateCard/>
            <S.CreateCardRight>
              <S.HelperQuestionArea>
                <S.HelperRight>
                  질문을 듣고,<br/>
                  떠오르는 음악이나 이야기가 있나요?
                </S.HelperRight>
              </S.HelperQuestionArea>
              <S.HelperSearchArea>
                <S.HelperRight>
                  당신의 이야기에 어울리는 음악을<br/>
                  직접 골라주세요.
                </S.HelperRight>
              </S.HelperSearchArea>
              <S.HelperDoneArea>
                <S.HelperRight>
                  이제 당신의 이야기를<br/>
                  다른 사람들과 나눠보세요!
                </S.HelperRight>
              </S.HelperDoneArea>
              <S.DoneButtonArea>
                <g.ButtonWrapper>
                  <g.DefaultButton>
                    <g.ButtonIconArea>
                      <g.ButtonIcon className="fa fa-check"/>
                    </g.ButtonIconArea>
                    다 썼어요
                  </g.DefaultButton>
                </g.ButtonWrapper>
              </S.DoneButtonArea>
            </S.CreateCardRight>
          </S.CreatePageSection>

          {/* 3.Question List Page */}
          <S.QuestionListPageSection>
            <S.PageHeaderContainer>
              <S.PageHeader>다른 질문 둘러보기</S.PageHeader>
              <S.ToQuestionListButton>모든 질문 보기 &gt;</S.ToQuestionListButton>
            </S.PageHeaderContainer>
            <com.QuestionCardGrid/>
          </S.QuestionListPageSection>

          {/* 4. Music List Page*/}
          <S.MusicListPageSection>
            <S.PageHeaderContainer>
              <S.PageHeader>
                최근에 선택된 음악
              </S.PageHeader>
            </S.PageHeaderContainer>
            <S.MusicListContainer>
              {/* <com.MusicCard/><com.MusicCard/>
              <com.MusicCard/><com.MusicCard/>
              <com.MusicCard/><com.MusicCard/> */}
            </S.MusicListContainer>
          </S.MusicListPageSection>

      </S.Background>

      

    </>
  );
};

export default Home;
