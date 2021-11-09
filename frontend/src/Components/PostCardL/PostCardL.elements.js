import React from "react";
import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const PostCardArea = styled.section`
  width: 28%;
  height: 720px;
  margin: 2% auto;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.nearWhite};
  box-shadow: ${g.CardShadow};
  border-radius: 8px;
  border: 1px solid #ABAAA6;
`;

export const HeaderArea = styled.section``;

export const CloseBtnArea = styled.section`
  text-align: right;
  margin: 2%;
  margin-bottom: 5%;
`;

export const CloseBtn = styled.div``;

export const PostTop = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2%;
`;

export const LikeArea = styled.div`
  display: flex;
  margin: auto 15% auto 0;
`;

export const LikeBtn = styled.div`
  margin-right: 20%;
`;

export const LikeCount = styled.div`
  margin: 2%;
`;

export const Question = styled.h5`
  text-align: right;
  color: rgba(56, 29, 0, .5);
`;

export const MiddleArea = styled.section`
  height: 70%;
  margin-bottom: 10%;
`;

export const MusicArea = styled.section`
  margin: 4%;
  text-align: right;
`;

export const ContentArea = styled.section`
  text-align: left;
  margin: 2%;
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
`;

export const ContentTitle = styled.h2`
  margin: 2%;
  margin-bottom: 5%;
`;

export const PubDate = styled.h5`
  margin: 2%;
  margin-bottom: 3%;
`;

export const BodyWrapper = styled.div`
  
`;

export const ContentBody = styled.div`
  line-height: 1.8;
  margin: 2%;
  font-weight: 400;
  height: 45%;
  overflow: scroll;
`;

export const PostBottom = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2%;
`;

export const BtnArea = styled.div`
  display: flex;
`;

export const EditBtn = styled.div`
  margin: auto 20%;
`;

export const DeleteBtn = styled.div`
  margin: auto 20%;
`;

export const Signature = styled.h2`
  margin: 2%;
`;


