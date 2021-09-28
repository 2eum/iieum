import axios from "axios";
import React, { useState } from "react";
import {
  FormArea,
  FormTopContainer,
  FormTitle,
  FormBody,
  MusicSearch,
  SaveButton,
} from "./DiaryForm.elements";

const DiaryForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    // axios({
    //   method: "post",
    //   url: "api/mypage/",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Token ff59ee976035b0ade661ea26b7a2ec277ee752c6",
    //   },
    //   data: {
    //     title: title,
    //     content: body,
    //   },
    // });
  };

  return (
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
