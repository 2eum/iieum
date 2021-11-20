import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostCardList } from "..";
import * as S from "./Search.elements";
import * as g from "../../globalStyles";
import { MusicCardGrid, QuestionCardGrid } from "../../Components";

const Search = ({ keyword }) => {
  const [postResult, setPostResult] = useState([]);
  const [questionResult, setQuestionResult] = useState([]);
  const [musicResult, setMusicResult] = useState([]);

  useEffect(() => {
    setPostResult([]);
    setQuestionResult([]);
    setMusicResult([]);
    axios({
      method: "get",
      url: `/api/search/${keyword}`,
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
        setPostResult(data.post);
        setQuestionResult(data.question);
        setMusicResult(data.music);
        return data;
      });
  }, [keyword]);
  return (
    <>
      <g.Background>
        <g.PageSection>
            <S.KeywordResult><S.Keyword>{keyword}</S.Keyword> 검색 결과</S.KeywordResult>
            <S.PostResultContainer>
              <S.ResultTitle>글 검색 결과</S.ResultTitle>
              <PostCardList list={postResult} />
            </S.PostResultContainer>

            <S.QuestionResultContainer>
            <S.ResultTitle>질문 검색 결과</S.ResultTitle>
            <QuestionCardGrid list={questionResult} />
            </S.QuestionResultContainer>

            <S.MusicResultContainer>
              <S.ResultTitle>음악 검색 결과</S.ResultTitle>
              <MusicCardGrid list={musicResult} />
            </S.MusicResultContainer>
        </g.PageSection>
      </g.Background>
      
    </>
   
  );
};

export default Search;
