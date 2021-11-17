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
      <g.MainContentContainer>
        <CreateCard currUser={currUser} token={token}
        userId={userId} questionId={id} type="post"/>
      </g.MainContentContainer>
    </g.Background>
    </>
  );
};

export default New;
