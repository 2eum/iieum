import React from "react";
import { MainContentContainer, PageHeader, Line } from "./New.elements";
import { DiaryForm } from "../../Components";
import { useParams, Redirect } from "react-router";

const New = ({ token }) => {
  let { id } = useParams();
  return (
    <>
      <MainContentContainer>
        <PageHeader>나의 이야기 작성하기</PageHeader>
        <Line />

        <DiaryForm token={token} type={"post"} c_questionId={id} />
      </MainContentContainer>
    </>
  );
};

export default New;
