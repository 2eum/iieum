import React from "react";
import {
  ContentArea,
  Content,
  Date,
  Preview,
  PreviewMusic,
  AlbumImg,
  MusicTitle,
  MusicArtist,
  PreviewDiary,
  DiaryTitle,
  DiaryBody,
} from "./List.elements";

const contents = [
  {
    title: "안녕하세요1",
    author: "May1",
    body: "1일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용",
    pubDate: "2021년 9월 27일 목요일",
  },
  {
    title: "안녕하세요2",
    author: "May2",
    body: "2일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용",
    pubDate: "2021년 9월 28일 금요일",
  },
  {
    title: "안녕하세요3",
    author: "May3",
    body: "3일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용",
    pubDate: "2021년 9월 29일 토요일",
  },
];

const List = () => {
  const listItems = [];

  contents.map((content) => {
    const item = (
      <Content>
        <Date>{content.pubDate}</Date>
        <Preview>
          <PreviewMusic>
            <AlbumImg src="https://image.bugsm.co.kr/album/images/350/40586/4058623.jpg" />
            <MusicTitle>Stupid Love Song</MusicTitle>
            <MusicArtist>AKMU</MusicArtist>
          </PreviewMusic>
          <PreviewDiary>
            <DiaryTitle>{content.title}</DiaryTitle>
            <DiaryBody>{content.body}</DiaryBody>
          </PreviewDiary>
        </Preview>
      </Content>
    );
    listItems.push(item);
  });
  return (
    <>
      <ContentArea>{listItems}</ContentArea>
    </>
  );
};

export default List;
