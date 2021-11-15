import React from "react";
import * as S from "./QuestionCard.elements";
import * as g from "../../globalStyles";

const QuestionCard = ({question, date, cardIndex, handleClick}) => {

  return (
    <>
      <S.QuestionCardContainer onClick = {()=> handleClick(cardIndex)}>
        <S.TopContainer>
          <S.Qdate>{date}</S.Qdate>
          <S.CardCorner/>
        </S.TopContainer>
        <S.Line/>
        <S.BottomContainer>

          {/* OpenListButton */}
          <g.ButtonWrapper>
            <g.ButtonIcon className="fa fa-angle-down fa-2x"/>
          </g.ButtonWrapper>
          <S.QuestionName>{question}</S.QuestionName>
        </S.BottomContainer>
      </S.QuestionCardContainer>
    </>
  );
};

export default QuestionCard;
