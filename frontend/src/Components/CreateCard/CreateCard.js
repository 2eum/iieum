import React from "react";
import * as S from "./CreateCard.elements";

const CreateCard = () => {
  const today = new Date();
  const formatToday = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  return (
    <>
      <S.CreateCardArea>
        <S.TopArea>
          <S.Question>내 인생에서 가장 더운 날의 기억</S.Question>
        </S.TopArea>
        <S.MusicSearchArea>
          <p>Search</p>
        </S.MusicSearchArea>
        <S.FormArea>
          <S.PubDate>{formatToday}</S.PubDate>
          <S.FormTitle
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            maxLength={120}
          />
          <S.FormBody
            placeholder="당신의 이야기를 들려주세요 :)"
            name="body"
            autoComplete="off"
          />
        </S.FormArea>
        <S.BottomArea>
          <S.Signature>효진</S.Signature>
        </S.BottomArea>
      </S.CreateCardArea>
    </>
  );
};

export default CreateCard;
