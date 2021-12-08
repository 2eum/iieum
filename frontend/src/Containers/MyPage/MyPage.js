import React, { useState, useEffect } from "react";
import { Calendar } from "../../Components";
import * as S from "./MyPage.elements";
import { Redirect } from "react-router";
import axios from "axios";
import { PostCardList } from "..";

const MyPage = ({ currUser, token, userId }) => {
  const [view, setView] = useState("list");
  const [postCount, setPostCount] = useState();
  const [likeCount, setLikeCount] = useState();
  const [selectedList, setSelectedList] = useState("post");
  const [postList, setPostList] = useState();
  const [likeList, setLikeList] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `api/userinfo/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setPostCount(response.data["post-count"]);
      setLikeCount(response.data["like-count"]);
    });
  }, [selectedList]);

  useEffect(() => {
    axios({
      method: "get",
      url: `api/likelist/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setLikeList(response.data);
    });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `api/postlist-user/${userId}/0`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setPostList(response.data);
    });
  }, []);

  const changeList = (e) => {
    setSelectedList(e.target.value);
  };

  const today = new Date();
  const todayString = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return token === "" ? (
    <Redirect to="/" />
  ) : (
    <>
      <S.InfoChangeLink to="/change">
        <i className="fas fa-user-edit" /> 내 정보 수정
      </S.InfoChangeLink>
      <S.MyPageBanner>
        <S.Message>
          <S.User>{currUser}</S.User>님, <br />
          당신의 이야기를 들려주세요.
        </S.Message>
        <S.StatsWrapper>
          <S.Date>{todayString}</S.Date>
          <S.Stat>작성한 이음 {postCount}개</S.Stat>
          <S.Stat>좋아요한 이음 {likeCount}개</S.Stat>
        </S.StatsWrapper>
      </S.MyPageBanner>

      <S.MainContentContainer>
        <S.ListSwitchContainer>
          <S.ListSwitchWrapper>
            <S.ListSwitch
              onClick={changeList}
              isSelected={selectedList === "post"}
              value={"post"}
            >
              나의 이음
            </S.ListSwitch>
          </S.ListSwitchWrapper>
          <S.ListSwitchWrapper>
            <S.ListSwitch
              onClick={changeList}
              isSelected={selectedList === "like"}
              value={"like"}
            >
              좋아요한 이음
            </S.ListSwitch>
          </S.ListSwitchWrapper>
        </S.ListSwitchContainer>
        {selectedList === "post" ? (
          <>
            <S.PostListSection>
              <Calendar token={token} currUser={currUser} userId={userId} />
            </S.PostListSection>
            <S.OverviewSection>
              <PostCardList
                currUser={currUser}
                token={token}
                userId={userId}
                list={postList}
              />
            </S.OverviewSection>
          </>
        ) : (
          <>
            <S.LikeListSection>
              <PostCardList
                currUser={currUser}
                token={token}
                userId={userId}
                list={likeList}
              />
            </S.LikeListSection>
          </>
        )}
      </S.MainContentContainer>
    </>
  );
};

export default MyPage;
