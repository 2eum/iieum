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
  UDBtn,
  Like,
  BtnArea
} from "./Detail.elements";
import { MusicCard } from "../";
import { LikeButton } from "../../Components";
import { useParams } from "react-router";
import axios from "axios";

const Detail = ({token, currUser}) => { //token 받아오기 추가
  let { id } = useParams();

  const [content, setContent] = useState(null);
  const [loaded, setLoad] = useState(false);
  const [placeholder, setPlaceholder] = useState("Loading Content");

  const [isLiked, setIsLiked] = useState(false);
  // const [likedUsers, setLikedUsers] = useState([]);
  const [likeCount, setLikeCount] = useState(0);

  const diary = [
  {
    id: 1,
    title: "첫번째 가짜일기",
    user: "가짜지은이",
    content: "여기는 아마도 본문? 오늘 좋아요 다 만들 수 있을까 디자인도 해야 해 바쁘다 바빠!",
    pub_date: "2021-10-10T00:00:00.000Z",
    question: {question_id: 1, question_content: "오늘은 뭐 했어요?"},
    liked_users: ["hyojinki", "may"],
    like_count: 0
  },
  {
    id: 2,
    title: "두번째 가짜일기",
    user: "가짜지은이",
    content: "여기는 아마도 본문? 오늘 좋아요 다 만들 수 있을까 디자인도 해야 해 바쁘다 바빠!",
    pub_date: "2021-10-10T00:00:00.000Z",
    question: {question_id: 1, question_content: "오늘은 뭐 했어요?"},
    liked_users: ["woos"],
    like_count: 5
  }
];

  useEffect(() => {
    axios({
      method: "GET",
      url: `api/musicdiary/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization : `Token ${token}`,
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
        return data;
      })
      .then((data) => {
        checkLiked(data.liked_users);
        setLikeCount(data.liked_users.length);
      })
      .then(() => {
        setLoad(true);
      });
      
    // setContent(diary[0]);
    // setLoad(true);
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

  //초기 렌더링 시, 내가 좋아요를 눌렀는지 여부를 가져옴
  // const getLiked = (e) => {
  //   const apiUrl = `/api/like/${id}/`;
  //   axios({
  //     method : "get",
  //     url : apiUrl,
  //     headers : {
  //       Authorization : `Token ${token}`,
  //     },
  //   })
  //   .then((response) => {
  //     checkLiked(response.data.liked_users);
  //     // setLikeCount(response.data.like_count); //liked, like_count : 유저가 좋아요한 여부를 백에서 받아옴
  //   })
  //   .catch((response) => {
  //     console.error(response);
  //   })
  // }


  //좋아요 누르기 (생성/삭제)
  const postLike = (e) => {
    axios({
      method: "post",
      url: `/api/like/${id}/`,
      headers: {
        Authorization: `Token ${token}`,
      },
      data : {
     // 글 id와 user 전달
        content_id : content.id,
        liked_user : currUser
      }
    })
    .then((response) => {
      // setLikedUsers(response.data.liked_users);
      checkLiked(response.data.liked_users);
      setLikeCount(response.data.liked_users.length);
      console.log("like 호출 결과:", response);
    })
    .catch((response) => {
      console.error(response);
    })

    // console.log("postLike to backend");
    // diary[0].liked_users.push(currUser);
    // checkLiked(diary[0].liked_users);
    // console.log(diary[0].liked_users);
    // isLiked ? setIsLiked(false) : setIsLiked(true);
    // isLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);    
  }
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
        </BtnArea>
      </ContentArea>
    </>
  );
};

export default Detail;
