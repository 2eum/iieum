import React, { useState } from "react";
import * as S from "./QuestionCard.elements";
import * as g from "../../styles/globalStyles";

const QuestionCard = ({ question, date, cardIndex, handleClick, open }) => {
  return (
    <S.QuestionCardContainer onClick={() => handleClick(cardIndex)}>
      <S.TopContainer>
        <S.Qdate>{date}</S.Qdate>
        <S.CardCorner />
      </S.TopContainer>
      <S.Line />
      <S.BottomContainer>
        {/* OpenListButton */}
        <g.OpenListButtonWrapper>
          {open ? (
            <g.OpenListButtonIcon className="fa fa-angle-up fa-2x" />
          ) : (
            <g.OpenListButtonIcon className="fa fa-angle-down fa-2x" />
          )}
        </g.OpenListButtonWrapper>
        <S.QuestionName>{question}</S.QuestionName>
      </S.BottomContainer>
    </S.QuestionCardContainer>
  );
};

export default QuestionCard;
