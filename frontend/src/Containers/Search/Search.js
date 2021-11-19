import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostCardList } from "..";
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
    <div>
      <p>검색어: {keyword}</p>
      <h1>글 검색 결과</h1>
      <PostCardList list={postResult} />
      <h1>질문 검색 결과</h1>
      <QuestionCardGrid list={questionResult} />
      <h1>음악 검색 결과</h1>
      <MusicCardGrid list={musicResult} />
    </div>
  );
};

export default Search;
