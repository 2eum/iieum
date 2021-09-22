import React from "react";

import {
  TodayPostContainer,
  Date,
  TodayMessage,
  PostContainer,
  ContentWrapper,
  PrevArrowContainer,
  NextArrowContainer,
  ContentTitle,
  ContentAuthor,
  ContentSummary,
  CreateButtonArea,
  CreateMessage,
  CreateButton,
} from "./Home.elements";

import { MusicCard } from "..";
import { BoldSpan } from "../../globalStyles";

const Content = {
  Title: "여행 가고 싶다",
  Author: "Baro",
  Summary:
    "요즘 제주도행 비행기 값이 그렇게 저렴하던데 그냥 사서 날라버릴까...",
};

const Home = () => {
  return (
    <>
      <TodayPostContainer>
        <Date>2021년 9월 12일</Date>
        <TodayMessage>누군가의 오늘 하루, 그리고 음악.</TodayMessage>
        <PostContainer>
          <PrevArrowContainer to="/">
            <i class="fas fa-chevron-left"></i>
          </PrevArrowContainer>
          <MusicCard />
          <ContentWrapper>
            <ContentTitle>
              {Content.Title}
              <ContentAuthor>by {Content.Author}</ContentAuthor>
            </ContentTitle>
            <ContentSummary>{Content.Summary}</ContentSummary>
          </ContentWrapper>
          <NextArrowContainer to="/">
            <i class="fas fa-chevron-right"></i>
          </NextArrowContainer>
        </PostContainer>
      </TodayPostContainer>
      <CreateButtonArea>
        <CreateMessage>
          오늘, <BoldSpan>당신의 하루</BoldSpan> 어떤 <BoldSpan>선율</BoldSpan>
          이었나요?
        </CreateMessage>
        <CreateButton>내 이야기 쓰러가기</CreateButton>
      </CreateButtonArea>
    </>
  );
};

export default Home;
