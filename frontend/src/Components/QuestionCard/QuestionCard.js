import React from "react";
import * as S from "./QuestionCard.elements";
import * as g from "../../globalStyles";

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

          {/* OpenListButton */}
          <g.ButtonWrapper>
            <g.ButtonIcon className="fa fa-angle-down fa-2x"/>
          </g.ButtonWrapper>

          <S.QuestionName>나의 이상적인 여름휴가</S.QuestionName>
        </S.BottomContainer>
      </S.QuestionCardContainer>
    </>
  );
};

export default QuestionCard;
