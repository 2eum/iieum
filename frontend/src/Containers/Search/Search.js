import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostCardList } from "..";
import * as S from "./Search.elements";
import * as g from "../../globalStyles";
import { MusicCardGrid, QuestionCardGrid } from "../../Components";

const Search = ({ word }) => {
  const [postResult, setPostResult] = useState([]);
  const [questionResult, setQuestionResult] = useState([]);
  const [musicResult, setMusicResult] = useState([]);
  const [keyword, setKeyword] = useState(word);
  const searchUrl = `/search?q=${keyword}`;

  useEffect(() => {
    setPostResult([]);
    setQuestionResult([]);
    setMusicResult([]);
    setKeyword(word);
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
  }, [word]);
  return (
    <>
      <g.Background>
        <g.PageSection>
            {/* <S.KeywordResult>
              <S.Keyword>{keyword}</S.Keyword>
            </S.KeywordResult> */}
              <S.SearchBarContainer>
            <S.SearchBar
              value={keyword}
              placeholder={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
          <S.SearchButton to={searchUrl}>
            <i className="fas fa-search"></i>
          </S.SearchButton>
        </S.SearchBarContainer>
            
            <S.PostResultContainer>
              <S.ResultTitle>글 검색 결과</S.ResultTitle>
              {postResult.length===0?
              <S.NoResultWrapper>
                <S.NoResult>검색결과가 없습니다</S.NoResult>
              </S.NoResultWrapper>
              : <PostCardList list={postResult} />
              }
            </S.PostResultContainer>

            <S.QuestionResultContainer>
            <S.ResultTitle>질문 검색 결과</S.ResultTitle>
            {questionResult.length===0?
              <S.NoResultWrapper>
                <S.NoResult>검색결과가 없습니다</S.NoResult>
              </S.NoResultWrapper>
                : <QuestionCardGrid list={questionResult} />
            }
            </S.QuestionResultContainer>

            <S.MusicResultContainer>
              <S.ResultTitle>음악 검색 결과</S.ResultTitle>
              {musicResult.length===0?
                <S.NoResultWrapper>
                  <S.NoResult>검색결과가 없습니다</S.NoResult>
                </S.NoResultWrapper>
                : <MusicCardGrid list={musicResult} />
                }
            </S.MusicResultContainer>
        </g.PageSection>
      </g.Background>
      
    </>
  );
};

export default Search;
