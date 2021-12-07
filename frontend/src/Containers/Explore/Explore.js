import React from "react";
import { QuestionCardGrid } from "../";
import * as S from "./Explore.elements";

const Explore = ({ currUser, token, userId }) => {
  return (
    <>
      <S.Title>질문 둘러보기</S.Title>
      <S.QuestionListWrapper>
        <QuestionCardGrid currUser={currUser} token={token} userId={userId} />
      </S.QuestionListWrapper>
    </>
  );
};

export default Explore;
