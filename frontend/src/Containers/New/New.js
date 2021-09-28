import React from "react";
import { MainContentContainer, PageHeader, Line } from "./New.elements";
import { DiaryForm } from "../../Components";

const New = ({ token }) => {
  return (
    <>
      <MainContentContainer>
        <PageHeader>나의 이야기 작성하기</PageHeader>
        <Line />

        <DiaryForm token={token} />
      </MainContentContainer>
    </>
  );
};

export default New;
