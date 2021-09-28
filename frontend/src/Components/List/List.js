import React, { useState, useEffect } from "react";
import {
  ContentArea,
  Content,
  ContentPubDate,
  Preview,
  PreviewMusic,
  AlbumImg,
  MusicTitle,
  MusicArtist,
  PreviewDiary,
  DiaryTitle,
  DiaryBody,
} from "./List.elements";

import axios from "axios";

// const contents = [
//   {
//     title: "안녕하세요1",
//     author: "May1",
//     body: "1일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용",
//     pubDate: "2021년 9월 27일 목요일",
//   },
//   {
//     title: "안녕하세요2",
//     author: "May2",
//     body: "2일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용",
//     pubDate: "2021년 9월 28일 금요일",
//   },
//   {
//     title: "안녕하세요3",
//     author: "May3",
//     body: "3일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용",
//     pubDate: "2021년 9월 29일 토요일",
//   },
// ];

const List = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // get all music diary data
    axios({
      method: "get",
      url: "/api/musicdiary/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ff59ee976035b0ade661ea26b7a2ec277ee752c6",
      },
    })
      .then((response) => {
        // error handling
        if (response.status > 400) {
          setPlaceholder("Something went wrong!");
        }
        return response.data;
      })
      .then((data) => setContent(data)); // add data to state
  }, []);

  console.log(content);
  const listItems = [];

  content.map((c) => {
    const itemDate = new Date(c.pub_date);

    const dateString = `${itemDate.getFullYear()}년 ${itemDate.getMonth()}월 ${itemDate.getDate()}일`;

    const item = (
      <Content>
        <ContentPubDate>{dateString}</ContentPubDate>
        <Preview>
          <PreviewMusic>
            <AlbumImg src="https://image.bugsm.co.kr/album/images/350/40586/4058623.jpg" />
            <MusicTitle>Stupid Love Song</MusicTitle>
            <MusicArtist>AKMU</MusicArtist>
          </PreviewMusic>
          <PreviewDiary>
            <DiaryTitle>{c.title}</DiaryTitle>
            <DiaryBody>{c.content}</DiaryBody>
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
