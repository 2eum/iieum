import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostCardList } from "..";
import * as S from "./Search.elements";
import * as g from "../../globalStyles";
import { MusicCardGrid, QuestionCardGrid } from "../../Components";

const Search = ({ currUser, token, userId, word }) => {
  const [postResult, setPostResult] = useState([]);
  const [questionResult, setQuestionResult] = useState([]);
  const [musicResult, setMusicResult] = useState([]);
  const [keyword, setKeyword] = useState(word);

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

  useEffect(() => {
    setPostResult([]);
    setQuestionResult([]);
    setMusicResult([]);
    setKeyword(word);
    axios({
      method: "get",
      url: `/api/search/${word}`,
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
  }, [word]);

  return (
    <>
      <g.Background>
        <g.PageSection>
          <S.SearchBarContainer>
            <S.SearchBar
              value={keyword}
              placeholder={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <S.SearchButton>
              <i className="fas fa-search"></i>
            </S.SearchButton>
          </S.SearchBarContainer>

          <S.PostResultContainer>
            <S.ResultTitle>글 검색 결과</S.ResultTitle>
            {postResult.length === 0 ? (
              <S.NoResultWrapper>
                <S.NoResult>검색결과가 없습니다</S.NoResult>
              </S.NoResultWrapper>
            ) : (
              <PostCardList
                currUser={currUser}
                token={token}
                userId={userId}
                list={postResult}
              />
            )}
          </S.PostResultContainer>

          <S.QuestionResultContainer>
            <S.ResultTitle>질문 검색 결과</S.ResultTitle>
            {questionResult.length === 0 ? (
              <S.NoResultWrapper>
                <S.NoResult>검색결과가 없습니다</S.NoResult>
              </S.NoResultWrapper>
            ) : (
              <QuestionCardGrid
                currUser={currUser}
                token={token}
                userId={userId}
                list={questionResult}
              />
            )}
          </S.QuestionResultContainer>

          <S.MusicResultContainer>
            <S.ResultTitle>음악 검색 결과</S.ResultTitle>
            {musicResult.length === 0 ? (
              <S.NoResultWrapper>
                <S.NoResult>검색결과가 없습니다</S.NoResult>
              </S.NoResultWrapper>
            ) : (
              <MusicCardGrid
                currUser={currUser}
                token={token}
                userId={userId}
                list={musicResult}
              />
            )}
          </S.MusicResultContainer>
        </g.PageSection>
      </g.Background>
    </>
  );
};

export default Search;
