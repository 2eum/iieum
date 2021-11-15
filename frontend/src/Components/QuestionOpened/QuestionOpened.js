import React from "react";
import * as S from "./QuestionOpened.elements";
import {PostCardList} from "../../Containers";
import * as g from "../../globalStyles";

const QuestionOpened = ({currUser, token, userId, question, detail, open, cardIndex}) => {
  return (
    <>
      <S.OpenedContainer open={open} cardIndex={cardIndex}>
        <S.QuestionContainer>
          <S.Question>{question}</S.Question>
          <S.QuestionDetails>
            {detail}
          </S.QuestionDetails>
        </S.QuestionContainer>
        <S.CreateButtonContainer>
          <S.CreateButtonWrapper>
            <g.DefaultButton>
              <g.ButtonIconArea>
                <g.ButtonIcon className="fa fa-pen"/>
              </g.ButtonIconArea>
              질문에 답하기
            </g.DefaultButton>
          </S.CreateButtonWrapper>
        </S.CreateButtonContainer>
        <PostCardList currUser={currUser} token={token} userId={userId}/>
      </S.OpenedContainer>
    </>

  )

}

export default QuestionOpened;