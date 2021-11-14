import React, { useState } from "react";
import { Calendar } from "../../Components";
import {
  CreateButton,
  MyPageBanner,
  Date,
  Message,
  MyPageTitle,
  ViewSwitchWrapper,
  ViewSwitch,
} from "./MyPage.elements";

import { MainContentContainer } from "../../globalStyles";
import { Redirect } from "react-router";

const MyPage = ({ currUser, token, userId }) => {
  const [view, setView] = useState("list");

  const changeView = (e) => {
    setView(e.target.value);
  };

  return token === "" ? (
    <Redirect to="/" />
  ) : (
    <>
      <MyPageBanner>
        <Date>2021년 9월 12일</Date>
        <Message>오늘 하루는 어땠나요?</Message>
        <CreateButton to="/new">오늘의 일기 쓰기</CreateButton>
      </MyPageBanner>

      <MainContentContainer>
        <MyPageTitle>나의 이야기</MyPageTitle>
        <Calendar token={token} currUser={currUser} userId={userId} />
        {/* <List token={token} /> */}
      </MainContentContainer>
    </>
  );
};

export default MyPage;
