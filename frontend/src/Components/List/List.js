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

const List = ({ token }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // get all music diary data
    axios({
      method: "get",
      url: "/api/mypage/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
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

  const listItems = [];

  content.map((c) => {
    const itemDate = new Date(c.pub_date);

    const dateString = `${itemDate.getFullYear()}년 ${
      itemDate.getMonth() + 1
    }월 ${itemDate.getDate()}일`;

    const item = (
      <Content key={c.id}>
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
