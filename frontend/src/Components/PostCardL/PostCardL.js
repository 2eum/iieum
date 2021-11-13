import React from "react";
import * as S from "./PostCardL.elements";
import { MusicCard } from "..";
import { useParams, Redirect } from "react-router";
import axios from "axios";

const PostCardL = ({ currUser, token, userId }) => {
  // let { id } = useParams();

  // const [content, setContent] = useState(null);
  // const [loaded, setLoad] = useState(false);
  // const [placeholder, setPlaceholder] = useState("Loading Content");
  // const [deleted, setDelete] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);
  // const [likeCount, setLikeCount] = useState(0);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: `/api/musicdiary/${id}/`,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Token ${token}`,
  //     }
  //   })
  //   .then((response) => {
  //     if (response.status > 400) {
  //       setPlaceholder("Something went wrong!");
  //     }
  //     return response.data;
  //   })
  //   .then((data) => {
  //     setContent(data);
  //     return data;
  //   })
  //   .then((data) => {
  //     checkLiked(data.liked_user);
  //     setLikeCount(data.liked_user.length);
  //     return data;
  //   })
  //   .then(() => {
  //     setLoad(true);
  //   });
  // }, []);

  // const pubDateObj = new Date(content ? content.pub_date : "");
  // let formattedDate = `${pubDateObj.getFullYear()}년 
  // ${pubDateObj.getMonth() + 1}월 
  // ${pubDateObj.getDate()}일`;
  
  // const checkLiked = (likeList) => {
  //   const intId = userId * 1;
  //   if (likeList.includes(intId)) {
  //     setIsLiked(true);
  //   } else {
  //     setIsLiked(false);
  //   }
  // };

  // const postLike = (e) => {
  //   axios({
  //     method: "post",
  //     url: `/api/like/${id}/`,
  //     headers: {
  //       Authorization: `Token ${token}`,
  //     },
  //   })
  //   .then ((response) => {
  //     checkLiked(response.data.liked_user);
  //     setLikeCount(response.data.liked_user.length);
  //   })
  //   .catch((response) => {
  //     console.error(response);
  //   });
  // };

  // const handleDelete = () => {
  //   axios({
  //     method: "delete",
  //     url: `/api/musicdiary/${id}/`,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Token ${token}`,
  //     },
  //   })
  //   .then ((response) => {
  //     if (response.status > 400) {
  //       setPlaceholder("Something went wrong!");
  //     }
  //     return response.data;
  //   })
  //   .then(() => {
  //     setDelete(true);
  //   })
  // }

  return (
    <>
      <S.PostCardArea>
        <S.HeaderArea>
          <S.CloseBtnArea>
            <S.CloseBtn>닫기</S.CloseBtn>
          </S.CloseBtnArea>
          <S.PostTop>
            <S.LikeArea>
              {/* {isLiked ? (
                <>
                  <e.LikeBtn onClick={postLike}>
                    <i className="fa fa-heart" />
                  </e.LikeBtn>
                  <e.LikeCount>{likeCount}</e.LikeCount>
                </>
              ) : (
                <>
                  <e.LikeBtn onClick={postLike}>
                    <i className="fa fa-heart-o" />
                  </e.LikeBtn>
                  <e.LikeCount>{likeCount}</e.LikeCount>
                </>
              )} */}
              <>
                <S.LikeBtn>
                  <i className="fa fa-heart-o fa-lg" />
                </S.LikeBtn>
                <S.LikeCount>15</S.LikeCount>
              </>
            </S.LikeArea>
            <S.Question>오늘 가장 잘한 일은 무엇인가요?</S.Question>
          </S.PostTop>
        </S.HeaderArea>
        <S.MiddleArea>
          <S.MusicArea>
            <MusicCard></MusicCard>
          </S.MusicArea>
          <S.ContentArea>
            <S.PubDate>2021년 11월 7일</S.PubDate>
            <S.ContentTitle>난 뜨거운 태양 아래서도 씩씩하게 걷지</S.ContentTitle>
            <S.BodyWrapper>
              <S.ContentBody>미칠듯이 더운 날이어도 휴가의 낭만은 포기할 수 없어.
          땀을 뻘뻘 흘리며 걸어도 여전히 눈앞에 펼쳐진 바다는 시원하고 아름다웠다.
          바다에 풍덩 빠져버리면, 눈에 보이는 온도만큼이나 시원할까?
          잠시동안 상상 속에서 상쾌한 헤엄을 치다가 이내 씩씩하게 발걸음을 옮겼다.
          저멀리 조그맣게 보이는 카페에서 시원한 빙수를 먹을 거야!
              </S.ContentBody>
            </S.BodyWrapper>
          </S.ContentArea>
        </S.MiddleArea>
        <S.PostBottom>
            <S.BtnArea>
              <S.EditBtn><i className="fa fa-pen fa-lg"/></S.EditBtn>
              <S.DeleteBtn><i className="fa fa-trash fa-lg"/></S.DeleteBtn>
            </S.BtnArea>
          <S.Signature>효진</S.Signature>
        </S.PostBottom>
      </S.PostCardArea>
    </>
  )};

export default PostCardL;
