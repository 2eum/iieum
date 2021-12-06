import React from "react";
import * as g from "../../styles/globalStyles";
import { QuestionCardGrid } from "../";
import * as S from "./Explore.elements";

const Explore = ({ currUser, token, userId }) => {
  return (
    <>
      <g.Background>
        <g.PageSection>
          <g.PageTitleWrapper>
            <g.PageTitle>질문 둘러보기</g.PageTitle>
          </g.PageTitleWrapper>
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
  );
};

export default Explore;
