import React from "react";
import * as S from "./PostCardL.elements";
import { MusicCard } from "..";
import { useParams, Redirect } from "react-router";
import axios from "axios";

const PostCardL = ({ currUser, token, userId, handleCardClose }) => {
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
            <S.CloseBtn onClick={handleCardClose}>닫기</S.CloseBtn>
          </S.CloseBtnArea>
          <S.PostTop>
            <S.LikeArea>
              {/* {isLiked ? (
                <>
                  <S.LikeBtn onClick={postLike}>
                    <i className="fa fa-heart" />
                  </S.LikeBtn>
                  <S.LikeCount>{likeCount}</S.LikeCount>
                </>
              ) : (
                <>
                  <S.LikeBtn onClick={postLike}>
                    <i className="fa fa-heart-o" />
                  </S.LikeBtn>
                  <S.LikeCount>{likeCount}</S.LikeCount>
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
            <MusicCard />
          </S.MusicArea>
          <S.ContentArea>
            <S.PubDate>2021년 11월 7일</S.PubDate>
            <S.ContentTitle>
              비에 흠뻑 젖은 날비에 흠뻑 젖은 날비에 흠뻑 젖은 날
            </S.ContentTitle>
            <S.BodyWrapper>
              <S.ContentBody>
                올해는 유난히 장마가 긴 것 같다. 오늘은 엄청 바쁘고 동선도
                복잡한 날이었는데, 하필 깜빡하고 우산을 안 챙겨나왔다. 학원에
                가야 하는데 비를 피했다가 가기에는 시간이 애매해서 별 수 없이
                홀딱 젖으며 역까지 뛰었다. 정신없는데 비까지 맞으니까 왠지
                처량해서 눈물이 날 뻔했다. 비 오는 날이면 꼭 우산 챙기라고
                메시지를 보내주던 그 애가 생각났다. 등굣길에 저멀리 그 애의
                우산이 보이면 내 우산을 접고 그 속으로 뛰어들고는 했다. 가끔은
                문득 그 순간이 그리워진다. 올해는 유난히 장마가 긴 것 같다.
                오늘은 엄청 바쁘고 동선도 복잡한 날이었는데, 하필 깜빡하고
                우산을 안 챙겨나왔다. 학원에 가야 하는데 비를 피했다가 가기에는
                시간이 애매해서 별 수 없이 홀딱 젖으며 역까지 뛰었다. 정신없는데
                비까지 맞으니까 왠지 처량해서 눈물이 날 뻔했다. 비 오는 날이면
                꼭 우산 챙기라고 메시지를 보내주던 그 애가 생각났다. 등굣길에
                저멀리 그 애의 우산이 보이면 내 우산을 접고 그 속으로 뛰어들고는
                했다. 가끔은 문득 그 순간이 그리워진다.
              </S.ContentBody>
            </S.BodyWrapper>
          </S.ContentArea>
        </S.MiddleArea>
        <S.PostBottom>
          <S.BtnArea>
            <S.EditBtn>
              <i className="fa fa-pen fa-lg" />
            </S.EditBtn>
            <S.DeleteBtn>
              <i className="fa fa-trash fa-lg" />
            </S.DeleteBtn>
          </S.BtnArea>
          <S.Signature>효진</S.Signature>
        </S.PostBottom>
      </S.PostCardArea>
    </>
  );
};

export default PostCardL;
