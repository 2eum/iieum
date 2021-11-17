import React from "react";
import * as g from "../../globalStyles";
import * as S from "./New.elements";
import { CreateCard } from "../../Components";
import { useParams, Redirect } from "react-router";

const New = ({ currUser, token, userId}) => {
  let { id } = useParams();
  return (
    <>
    <g.Background> 
      <g.PageSection>
        <g.PageTitleWrapper>
          <g.PageTitle>이야기 작성하기</g.PageTitle>
          <S.ReselectButtonWrapper>
            <S.ReselectButton to="/explore">
              질문 다시 고르기
            </S.ReselectButton>
          </S.ReselectButtonWrapper>
        </g.PageTitleWrapper>
        <g.MainContentContainer>
          <S.CreateCardWrapper>
            <CreateCard currUser={currUser} token={token}
            userId={userId} questionId={id} type="post"/>
          </S.CreateCardWrapper>
        </g.MainContentContainer>
      </g.PageSection>
    </g.Background>
    </>
  );
};

export default New;
