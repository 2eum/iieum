import React from "react";
import { QuestionCardGrid } from "../../Containers";
import * as S from "./Explore.elements";

const Explore = ({ currUser, token, userId, width }) => {
  return (
    <>
      <S.Title>질문 둘러보기</S.Title>
      <S.QuestionListWrapper>
        <QuestionCardGrid
          currUser={currUser}
          token={token}
          userId={userId}
          width={width}
          isExplore={true}
        />
      </S.QuestionListWrapper>
    </>
  );
};

export default Explore;
