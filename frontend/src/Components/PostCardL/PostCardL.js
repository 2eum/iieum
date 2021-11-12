import React, { useState, useEffect } from "react";
import * as S from "./PostCardL.elements";
import { MusicCard } from "..";
import { useParams } from "react-router";
import axios from "axios";

const PostCardL = ({ currUser, token, userId, handleCardClose, postId }) => {
  const [content, setContent] = useState(null);
  const [loaded, setLoad] = useState(false);
  const [placeholder, setPlaceholder] = useState("Loading Content");
  const [deleted, setDelete] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

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
      })
      .then(() => {
        setLoad(true);
      });
  }, [postId]);

  const pubDateObj = new Date(content ? content.pub_date : "");
  let formattedDate = `${pubDateObj.getFullYear()}년
  ${pubDateObj.getMonth() + 1}월
  ${pubDateObj.getDate()}일`;

  const checkLiked = (likeList) => {
    const intId = userId * 1;
    if (likeList.includes(intId)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

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

  const handleDelete = () => {
    axios({
      method: "delete",
      url: `/api/post/${id}/`,
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
    <>
      {content && postId ? (
        <S.PostCardArea>
          <S.HeaderArea>
            <S.CloseBtnArea>
              <S.CloseBtn onClick={handleCardClose}>닫기</S.CloseBtn>
            </S.CloseBtnArea>
            <S.PostTop>
              <S.LikeArea>
                {isLiked ? (
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
                )}
              </S.LikeArea>
              <S.Question>{content.question.question_content}</S.Question>
            </S.PostTop>
          </S.HeaderArea>
          <S.MiddleArea>
            <S.MusicArea>
              <MusicCard />
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
            {currUser === content.user ? (
              <S.BtnArea>
                <S.EditBtn>
                  <i className="fa fa-pen fa-lg" />
                </S.EditBtn>
                <S.DeleteBtn>
                  <i className="fa fa-trash fa-lg" />
                </S.DeleteBtn>
              </S.BtnArea>
            ) : (
              ""
            )}

            <S.Signature>{content.user}</S.Signature>
          </S.PostBottom>
        </S.PostCardArea>
      ) : (
        ""
      )}
    </>
  );
};

export default PostCardL;
