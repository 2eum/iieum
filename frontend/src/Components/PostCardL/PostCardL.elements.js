import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const PostCardArea = styled.section`
  width: 90%;
  height: 45vw;
  margin: auto;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.nearWhite};
  box-shadow: ${g.CardShadow};
  border-radius: 8px;
  border: 1px solid #abaaa6;
  z-index: ${(p) => p.order * -1};
`;

export const HeaderArea = styled.section``;

export const CloseBtnArea = styled.section`
  text-align: right;
  margin: 2%;
  display: flex;
  justify-content: flex-end;
`;

export const CloseBtn = styled.p`
  cursor: pointer;
`;

export const PostTop = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2%;
`;

export const LikeArea = styled.div`
  width: 10%;
  display: flex;
`;

export const LikeBtn = styled.div`
  margin-right: 20%;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  margin: 2%;
`;

export const Question = styled.h5`
  text-align: right;
  color: ${colors.iiBrown};
  opacity: 0.5;
`;

export const MiddleArea = styled.section`
  height: 70%;
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
`;

export const MusicArea = styled.section`
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

export const ContentArea = styled.section`
  text-align: left;
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
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
  margin: 2%;
  overflow-y: scroll;
  height: 20vw;
`;

export const ContentBody = styled.p`
  line-height: 1.8;
  font-weight: 400;
`;

export const PostBottom = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 2%;
`;

export const BtnArea = styled.div`
  width: 50%;
  display: flex;
`;

export const EditBtn = styled.div`
  margin: auto 5%;
`;

export const DeleteBtn = styled.div`
  margin: auto 5%;
  cursor: pointer;
`;

export const Signature = styled.h3`
  margin: 2%;
  justify-self: flex-end;
`;
