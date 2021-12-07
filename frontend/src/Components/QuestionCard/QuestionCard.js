import React from "react";
import * as S from "./QuestionCard.elements";

const QuestionCard = ({ question, date, cardIndex, handleClick, open }) => {
  return (
    <S.QuestionCardContainer onClick={() => handleClick(cardIndex)}>
      <S.TopContainer>
        <S.Qdate>{date}</S.Qdate>
        <S.CardCorner />
      </S.TopContainer>
      <S.Line />
      <S.BottomContainer>
        <S.OpenListButtonWrapper>
          {open ? (
            <S.OpenListButtonIcon className="fa fa-angle-up fa-2x" />
          ) : (
            <S.OpenListButtonIcon className="fa fa-angle-down fa-2x" />
          )}
        </S.OpenListButtonWrapper>
        <S.QuestionName>{question}</S.QuestionName>
      </S.BottomContainer>
    </S.QuestionCardContainer>
  );
};

export default QuestionCard;
