import React, { useState } from "react";
import { List, Calendar } from "../../Components";
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

const MyPage = ({ token }) => {
  const [view, setView] = useState("cal");

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
        <CreateButton>오늘의 일기 쓰기</CreateButton>
      </MyPageBanner>

      <MainContentContainer>
        <MyPageTitle>나의 이야기</MyPageTitle>
        <ViewSwitchWrapper>
          <ViewSwitch value="list" onClick={(e) => changeView(e)}>
            리스트 보기
          </ViewSwitch>
          <ViewSwitch value="cal" onClick={(e) => changeView(e)}>
            캘린더 보기
          </ViewSwitch>
        </ViewSwitchWrapper>
        {view === "list" ? <List /> : <Calendar token={token} />}
      </MainContentContainer>
    </>
  );
};

export default MyPage;
