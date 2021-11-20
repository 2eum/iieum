import React from "react";
import * as S from "./QuestionOpened.elements";
import {PostCardList} from "../../Containers";
import * as g from "../../globalStyles";

const QuestionOpened = ({currUser, token, userId, questionId, question, detail, open, cardIndex}) => {
  const gridNum = cardIndex % 3;

  return (
    <>
      <S.OpenedContainer open={open} gridNum={gridNum}>
        <S.QuestionContainer>
          <S.Question>{question}</S.Question>
          <S.QuestionDetails>
            {detail}
          </S.QuestionDetails>
        </S.QuestionContainer>
        <S.CreateButtonContainer>
          <S.CreateButtonWrapper>
            <g.DefaultButton to={`/new/${questionId}`}>
              <g.ButtonIconArea>
                <g.ButtonIcon className="fa fa-pen"/>
              </g.ButtonIconArea>
              질문에 답하기
            </g.DefaultButton>
          </S.CreateButtonWrapper>
        </S.CreateButtonContainer>
        <PostCardList currUser={currUser} token={token} userId={userId} questionId={questionId} mode={"question"}/>
      </S.OpenedContainer>
    </>

  )

}

export default QuestionOpened;