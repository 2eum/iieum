import React, { useState, useEffect } from "react";
import {
  DetailHeader,
  BackToList,
  MusicArea,
  Line,
  ContentArea,
  ContentTitle,
  ContentInfo,
  ContentAuthor,
  PubDate,
  ContentBody,
  UDBtn,
} from "./Detail.elements";
import { MusicCard } from "../";
import { useParams } from "react-router";
import axios from "axios";

const Detail = () => {
  let { id } = useParams();

  const [content, setContent] = useState(null);
  const [loaded, setLoad] = useState(false);
  const [placeholder, setPlaceholder] = useState("Loading Content");

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/musicdiary/${id}/`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status > 400) {
          setPlaceholder("Something went wrong!");
        }
        return response.data;
      })
      .then((data) => {
        setContent(data);
      })
      .then(() => {
        setLoad(true);
      });
  }, []);

  const pubDateObj = new Date(content ? content.pub_date : "");
  let formattedDate = `${pubDateObj.getFullYear()}년 ${
    pubDateObj.getMonth() + 1
  }월 ${pubDateObj.getDate()}일`;

  return (
    <>
      <DetailHeader>
        <BackToList to="/mypage">&lt; 내 글 목록으로</BackToList>
      </DetailHeader>
      <MusicArea>
        <MusicCard fontColor={"black"} />
      </MusicArea>
      <Line />

      <ContentArea>
        {!loaded ? (
          placeholder
        ) : (
          <>
            <ContentTitle>{content.title}</ContentTitle>
            <ContentInfo>
              <ContentAuthor>{content.user}</ContentAuthor>
              <PubDate>{formattedDate}</PubDate>
            </ContentInfo>
            <ContentBody>{content.content}</ContentBody>
          </>
        )}
      </ContentArea>
    </>
  );
};

export default Detail;
