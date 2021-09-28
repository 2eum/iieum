import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import {
  FormArea,
  FormQuestion,
  FormTopContainer,
  FormTitle,
  FormBody,
  MusicSearch,
  SaveButton,
} from "./DiaryForm.elements";

const DiaryForm = ({ token }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [submitStat, setSubmitStat] = useState(false);

  const [questionList, setQuestions] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "api/question/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
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
        question: questionId,
      },
    }).then(() => setSubmitStat(true));
  };

  const qListComponent = [
    <option disabled selected value>
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

  const onQuestionChange = (e) => {
    setQuestionId(e.target.value);
  };

  return submitStat ? (
    <Redirect to="/" />
  ) : (
    <>
      <FormArea onSubmit={handleSubmit}>
        <FormQuestion onChange={(e) => onQuestionChange(e)}>
          {qListComponent}
        </FormQuestion>
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
