import React from "react";
import OpenListButton from "../OpenListButton/OpenListButton";
import * as S from "./QuestionCard.elements";

const QuestionCard = () => {
  return (
    <>
      <S.QuestionCardContainer>
        <S.TopContainer>
          <S.Qdate>2021년 11월 14일</S.Qdate>
          <S.CardCorner/>
        </S.TopContainer>
        <S.Line/>
        <S.BottomContainer>
          <OpenListButton/>
          <S.QuestionName>나의 이상적인 여름휴가</S.QuestionName>
        </S.BottomContainer>
      </S.QuestionCardContainer>
    </>
  );
};

export default QuestionCard;
