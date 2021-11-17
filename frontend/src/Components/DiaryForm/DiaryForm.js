import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import {
  FormArea,
  FormQuestion,
  FormTopContainer,
  FormTitle,
  FormBody,
  SearchSection,
  MusicSearch,
  SearchedContainer,
  SaveButton,
  SelectionContainer,
} from "./DiaryForm.elements";

import MusicSelection from "../MusicSelection/MusicSelection";
import { SearchedItem } from "..";

const DiaryForm = ({ token, c_title, c_body, c_questionId, type, c_id }) => {
  const [id, setId] = useState(c_id || "");
  const [title, setTitle] = useState(c_title || "");
  const [body, setBody] = useState(c_body || "");
  const [questionId, setQuestionId] = useState(c_questionId || 1);
  const [submitStat, setSubmitStat] = useState(false);

  const [questionList, setQuestions] = useState([]);

  const [searchCount, setSearchCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchReady, setSearchReady] = useState(false);

  const [selected, setSelected] = useState(false);

  const [mObject, setMObject] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: "api/question/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${token}`,
      },
    })
      .then((response) => {
        const list = [];
        response.data.map((d) => {
          const qSet = { id: d.id, question: d.question_content };
          list.push(qSet);
        });
        return list;
      })
      .then((data) => setQuestions(data));
  }, []);

  useEffect(() => {
    if (searchQuery !== "") {
      axios({
        method: "post",
        url: "api/spotify/",
        headers: {
          "Content-Type": "application/json",
          Authorization: `jwt ${token}`,
        },
        data: {
          search: searchQuery,
        },
      })
        .then((res) => {
          const results = res.data.Results.tracks.items;
          const arr = [];
          for (let m of results) {
            const info = {};
            info.img = m.album.images[0].url;
            info.url = m.external_urls.spotify;
            info.title = m.name;
            info.preview = m.preview_url;
            info.artist = m.artists.map((x) => x.name).join(", ");
            arr.push(info);
          }
          setSearchResult(arr);
        })
        .then(() => setSearchReady(true));
    }
  }, [searchQuery]);

  const handleSubmit = (e) => {
    axios({
      method: type,
      url: type === "post" ? "api/post/" : `api/post/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${token}`,
      },
      data: {
        title: title,
        content: body,
        track_title: mObject.title,
        track_artist: mObject.artist,
        track_album_cover: mObject.img,
        spotify_link: mObject.url,
        track_audio: mObject.preview,
        question: questionId,
      },
    }).then(() => setSubmitStat(true));
  };

  const updateSearchInput = (e) => {
    setSearchCount(searchCount + 1);
    let count = searchCount;
    setTimeout(() => {
      if (count === searchCount) {
        setSelected(false);
        setSearchQuery(e.target.value);
      }
    }, 1000);
  };

  const qListComponent = [
    <option key="0" disabled>
      질문을 선택해주세요
    </option>,
  ];
  questionList.map((q) => {
    qListComponent.push(
      <option key={q.id} value={q.id}>
        {q.question}
      </option>
    );
  });

  const selectMusic = (i) => {
    const musicInfo = {
      title: searchResult[i].title,
      artist: searchResult[i].artist,
      img: searchResult[i].img,
      url: searchResult[i].url,
      preview: searchResult[i].preview,
    };
    setMObject(musicInfo);
    setSelected(true);
  };

  let search = searchResult.map((s, i) => {
    return (
      <SearchedItem
        key={i}
        index={i}
        title={s.title}
        artist={s.artist}
        img={s.img}
        url={s.url}
        selectMusic={selectMusic}
      />
    );
  });

  const onQuestionChange = (e) => {
    console.log(e.target.value);
    setQuestionId(e.target.value);
  };

  return submitStat ? (
    <Redirect to={`/detail/${id}`} />
  ) : (
    <>
      <FormArea onSubmit={handleSubmit}>
        <FormQuestion
          value={questionId || 0}
          onChange={(e) => onQuestionChange(e)}
        >
          {qListComponent}
        </FormQuestion>
        <FormTopContainer>
          <FormTitle
            type="text"
            name="title"
            placeholder="제목"
            maxLength={120}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <SelectionContainer>
            {selected ? (
              <MusicSelection
                title={mObject.title}
                artist={mObject.artist}
                img={mObject.img}
                url={mObject.url}
                preview={mObject.preview}
              />
            ) : (
              ""
            )}
          </SelectionContainer>
          <SearchSection>
            <MusicSearch
              type="text"
              placeholder="음악 검색.."
              onChange={(e) => updateSearchInput(e)}
            />
            {searchReady && !selected ? (
              <SearchedContainer>{search}</SearchedContainer>
            ) : (
              ""
            )}
          </SearchSection>
        </FormTopContainer>
        <FormBody
          placeholder="오늘의 이야기를 들려주세요"
          name="body"
          autoComplete="off"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <SaveButton onClick={(e) => handleSubmit(e)}>저장하기</SaveButton>
      </FormArea>
    </>
  );
};
export default DiaryForm;
