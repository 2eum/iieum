import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";
import {
  FormArea,
  FormTopContainer,
  FormTitle,
  FormBody,
  MusicSearch,
  SaveButton,
} from "./DiaryForm.elements";

const DiaryForm = ({ token }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitStat, setSubmitStat] = useState(false);

  const handleSubmit = (e) => {
    axios({
      method: "post",
      url: "api/musicdiary/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      data: {
        title: title,
        content: body,
        question: 1,
      },
    }).then(() => setSubmitStat(true));
  };

  return submitStat ? (
    <Redirect to="/" />
  ) : (
    <>
      <FormArea onSubmit={handleSubmit}>
        <FormTopContainer>
          <FormTitle
            type="text"
            name="title"
            placeholder="제목"
            maxLength={120}
            onChange={(e) => setTitle(e.target.value)}
          />
          <MusicSearch type="text" placeholder="음악 검색.." />
          {/* <MusicChoice/> */}
        </FormTopContainer>
        <FormBody
          placeholder="오늘의 이야기를 들려주세요"
          name="body"
          autoComplete="off"
          onChange={(e) => setBody(e.target.value)}
        />
        <SaveButton onClick={(e) => handleSubmit(e)}>저장하기</SaveButton>
      </FormArea>
    </>
  );
};
export default DiaryForm;
