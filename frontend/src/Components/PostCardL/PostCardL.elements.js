import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const PostCardArea = styled.section`
  width: 34rem;
  height: 50rem;
  margin: auto;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${colors.iiBeige};
  box-shadow: ${g.CardShadow};
  border-radius: 8px;
  border: 1px solid #abaaa6;
  // if card is stacked, set z-index according to order
  z-index: ${(p) => p.order * -1};
`;

export const HeaderArea = styled.section`
  height: 10%;
`;

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
  align-items: center;
  margin: 2%;
`;

export const LikeArea = styled.div`
  width: 30%;
  display: flex;
  gap: 10%;
  align-items: center;
`;

export const LikeBtn = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
`;

export const LikeCount = styled.div``;

export const Question = styled.p`
  text-align: right;
  color: ${colors.iiBrown};
  opacity: 0.5;
`;

export const MiddleArea = styled.section`
  height: 70%;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MusicArea = styled.section`
  width: 20vw;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const ContentArea = styled.section`
  text-align: left;
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
`;

export const ContentTitle = styled.h2`
  margin-bottom: 5%;
  word-wrap: break-word;
`;

export const PubDate = styled.p`
  color: ${colors.darkGray};
`;

export const BodyWrapper = styled.div`
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
  align-items: center;
  margin: 2%;
  height: 10%;
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
