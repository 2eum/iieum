import React, { useState } from "react";
import * as g from "../../globalStyles";
import { Redirect } from "react-router";
import { QuestionCardGrid } from "../../Components";
import * as S from "./Explore.elements";

const Explore = ({ currUser, token, userId }) => {
  return (
    <>
    <g.Background>
      <g.PageSection>
        <S.ExploreTitleWrapper>
          <S.ExploreTitle>질문 둘러보기</S.ExploreTitle>
        </S.ExploreTitleWrapper>
        <S.QuestionListWrapper>
          <QuestionCardGrid 
            currUser={currUser}
            token={token}
            userId={userId}
          />
        </S.QuestionListWrapper>
      </g.PageSection>
    </g.Background>
    
    </>
  )
}

export default Explore;