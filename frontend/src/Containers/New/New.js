import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './New.elements';
import { CreateCard } from '../../Components';
import { useParams } from 'react-router';

const New = ({ currUser, token, userId, handleAlert }) => {
  let { id } = useParams();
  const [question, setQuestion] = useState('');

  useEffect(() => {
    axios({
      method: 'get',
      url: `api/question/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      setQuestion(response.data.question_content);
    });
  }, [question]);

  return (
    <>
      <S.Title>{question ? question : ''}</S.Title>
      <S.ReselectButtonWrapper>
        <S.ReselectButton to="/explore">질문 다시 고르기</S.ReselectButton>
      </S.ReselectButtonWrapper>
      <S.ContentContainer>
        <S.CreateCardWrapper>
          <CreateCard
            currUser={currUser}
            token={token}
            userId={userId}
            questionId={id}
            handleAlert={handleAlert}
            locationAt="new"
          />
        </S.CreateCardWrapper>
      </S.ContentContainer>
    </>
  );
};

export default New;
