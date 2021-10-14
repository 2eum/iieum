import React, { useState, useEffect } from "react";
import {
  DetailHeader,
  BackToList,
  MusicArea,
  Line,
  QuestionWrapper,
  ContentArea,
  ContentTitle,
  ContentInfo,
  ContentAuthor,
  PubDate,
  ContentBody,
  BtnArea,
  EditBtn,
  DeleteBtn,
  Like
} from "./Detail.elements";
import { MusicCard } from "../";
import { useParams, Redirect } from "react-router";
import axios from "axios";

const Detail = ({ currUser, token }) => {
  let { id } = useParams();

  const [content, setContent] = useState(null);
  const [loaded, setLoad] = useState(false);
  const [placeholder, setPlaceholder] = useState("Loading Content");
  const [deleted, setDelete] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    console.log("useeffect");
    axios({
      method: "get",
      url: `/api/musicdiary/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.status > 400) {
          setPlaceholder("Something went wrong!");
        }
        return response.data;
      })
      .then((data) => {
        setContent(data);
        return data;
      })
      .then((data) => {
        checkLiked(data.liked_user);
        setLikeCount(data.liked_user.length);
        return data;
      })
      .then(() => {
        setLoad(true);
      });
  }, []);

  const pubDateObj = new Date(content ? content.pub_date : "");
  let formattedDate = `${pubDateObj.getFullYear()}년 ${
    pubDateObj.getMonth() + 1
  }월 ${pubDateObj.getDate()}일`;


  ///////////////LIKE////////////////

  const checkLiked = (likeList) => {
    for(let i = 0; i < likeList.length; i++){
      if (likeList[i] === currUser){
        setIsLiked(true);
      }
    }
  }

  //좋아요 누르기 (생성/삭제)
  const postLike = (e) => {
    axios({
      method: "post",
      url: `/api/like/${id}/`,
      headers: {
        Authorization: `Token ${token}`,
      }
    })
    .then((response) => {
      checkLiked(response.data.liked_user);
      setLikeCount(response.data.liked_user.length);
      //console.log("like 호출 결과:", response);
    })
    .catch((response) => {
      console.error(response);
    }) 
  }

  const handleDelete = () => {
    axios({
      method: "delete",
      url: `/api/musicdiary/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        if (response.status > 400) {
          setPlaceholder("Something went wrong!");
        }
        return response.data;
      })
      .then(() => {
        setDelete(true);
      });
  };

  return (
    deleted ? (
    <Redirect to="/" />
    ) : (
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
            <QuestionWrapper>
              질문: {content.question.question_content}
            </QuestionWrapper>
            <ContentTitle>{content.title}</ContentTitle>
            <ContentInfo>
              <ContentAuthor>{content.user}</ContentAuthor>
              <PubDate>{formattedDate}</PubDate>
            </ContentInfo>
            <ContentBody>{content.content}</ContentBody>
          </>
        )}
        <BtnArea>
          {isLiked ? 
              <Like onClick={postLike}><i class="fa fa-heart"/> 좋아요 {likeCount}</Like> :
              <Like onClick={postLike}><i class="fa fa-heart-o"/> 안좋아요 {likeCount}</Like>
          }
          {!loaded ? (
          placeholder
          ) : content.user === currUser ? (
          <>
            <EditBtn to={`/edit/${content.id}`}>Edit</EditBtn>
            <DeleteBtn onClick={() => handleDelete()}>Delete</DeleteBtn>
          </>
          ) : (
            ""
          )}
        </BtnArea>
      </ContentArea>
    </>
  ))
}

export default Detail;
