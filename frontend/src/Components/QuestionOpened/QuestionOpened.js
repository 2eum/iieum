import React from "react";
import * as S from "./QuestionOpened.elements";
import { CreateButton, PostCardL, PostCardS } from "..";

const QuestionStories = () => {

  return (
    <>
      <S.QuestionContainer>
        <S.Question>나의 이상적인 여름휴가</S.Question>
        <S.QuestionDetails>덥고 힘들고 지치는 날, 당신이 꿈꾸는 휴가의 모습이 있나요? 
          바라는 대로 적으면 이루어질 거예요.
        </S.QuestionDetails>
      </S.QuestionContainer>
      <S.CreateButtonContainer>
        <g.DefaultButton>
          <g.ButtonIconArea>
            <g.ButtonIcon className="fa fa-pen"/>
          </g.ButtonIconArea>
          질문에 답하기
        </g.DefaultButton>
      </S.CreateButtonContainer>
      <S.CardListContainer>
        
      </S.CardListContainer>
    </>

  )

}