import React from 'react';
import * as S from './QuestionOpened.elements';
import { PostCardList } from '../../Containers';

const QuestionOpened = ({
  currUser,
  token,
  userId,
  questionId,
  question,
  detail,
  open,
  cardIndex,
  width,
}) => {
  const gridNum = width >= 1280 ? cardIndex % 3 : cardIndex % 2;

  return (
    <>
      <S.OpenedContainer open={open} gridNum={gridNum}>
        <S.QuestionContainer>
          <S.Question>{question}</S.Question>
          <S.QuestionDetails>{detail}</S.QuestionDetails>
        </S.QuestionContainer>
        <S.CreateButtonContainer>
          <S.CreateButtonWrapper>
            <S.AnswerButton to={`/new/${questionId}`}>
              <i className="fa fa-pen" />
              질문에 답하기
            </S.AnswerButton>
          </S.CreateButtonWrapper>
        </S.CreateButtonContainer>
        <PostCardList
          currUser={currUser}
          token={token}
          userId={userId}
          questionId={questionId}
          mode={'question'}
          width={width}
        />
      </S.OpenedContainer>
    </>
  );
};

export default QuestionOpened;
