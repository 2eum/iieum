import React, { useState, useEffect } from "react";
import * as S from "./PostCardL.elements";
import { MusicCard } from "..";
import axios from "axios";

const PostCardL = ({
  currUser,
  token,
  userId,
  handleCardClose,
  postId,
  order,
  cols,
}) => {
  const [content, setContent] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // get content info from api
  useEffect(() => {
    axios({
      method: "get",
      url: `/api/post/${postId}`,
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
      .then((data) => {
        setContent(data);
        return data;
      })
      .then((data) => {
        checkLiked(data.liked_user);
        setLikeCount(data.liked_user.length);
        return data;
      });
  }, [postId]);

  // set date form
  const pubDateObj = new Date(content ? content.pub_date : "");
  let formattedDate = `${pubDateObj.getFullYear()}년
  ${pubDateObj.getMonth() + 1}월
  ${pubDateObj.getDate()}일`;

  // check if liked post
  const checkLiked = (likeList) => {
    const intId = userId * 1;
    if (likeList.includes(intId)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  // like post request
  const postLike = (e) => {
    axios({
      method: "post",
      url: `/api/like/${postId}/`,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        checkLiked(response.data.liked_user);
        setLikeCount(response.data.liked_user.length);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  // delete request
  const handleDelete = () => {
    console.log(1);
    axios({
      method: "delete",
      url: `/api/post/${postId}/`,
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
        handleCardClose();
      });
  };

  return (
    <>
      {/* load only if content is loaded */}
      {content && postId ? (
        <S.PostCardArea order={order}>
          <S.HeaderArea>
            <S.CloseBtnArea>
              {/* render close button only on card list */}
              {handleCardClose ? (
                <S.CloseBtn onClick={handleCardClose}>닫기</S.CloseBtn>
              ) : (
                ""
              )}
            </S.CloseBtnArea>
            <S.PostTop>
              <S.LikeArea>
                <S.LikeBtn onClick={postLike}>
                  {/* toggle full, empty heart icon */}
                  {isLiked ? (
                    <i className="fa fa-heart" />
                  ) : (
                    <i className="fa fa-heart-o" />
                  )}
                </S.LikeBtn>
              </S.LikeArea>
              <S.Question>{content.question.question_content}</S.Question>
            </S.PostTop>
          </S.HeaderArea>
          <S.MiddleArea>
            <S.MusicArea>
              <MusicCard
                title={content.track_title}
                artist={content.track_artist}
                source={content.track_audio}
                link={content.spotify_link}
                cover={content.track_album_cover}
                cols={cols}
                postId={postId}
              />
            </S.MusicArea>
            <S.ContentArea>
              <S.PubDate>{formattedDate}</S.PubDate>
              <S.ContentTitle>{content.title}</S.ContentTitle>
              <S.BodyWrapper>
                <S.ContentBody>{content.content}</S.ContentBody>
              </S.BodyWrapper>
            </S.ContentArea>
          </S.MiddleArea>
          <S.PostBottom>
            <S.Signature>{content.user}</S.Signature>
            {/* show edit, delete button only when user is post card owner */}
            {currUser === content.user ? (
              <S.BtnArea>
                <S.EditBtn>
                  <i className="fa fa-pen fa-lg" />
                </S.EditBtn>
                <S.DeleteBtn onClick={handleDelete}>
                  <i className="fa fa-trash fa-lg" />
                </S.DeleteBtn>
              </S.BtnArea>
            ) : (
              ""
            )}
          </S.PostBottom>
        </S.PostCardArea>
      ) : (
        ""
      )}
    </>
  );
};

export default PostCardL;
