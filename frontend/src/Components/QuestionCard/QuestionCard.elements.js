import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const QuestionCardContainer = styled.div`
  width: 20vw;
  height: 10vw;

  margin: auto;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1%;
  text-align: center;
  background-color: ${colors.iiBeige};
  box-shadow: ${g.CardShadow};
  border-radius: 8px;
  border: 1px solid #abaaa6;
  position: relative;
`;

export const TopContainer = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-between;
  margin: 2%;
`;

export const Qdate = styled.p`
  font-size: 1.3rem;
`;

export const CardCorner = styled.div``;

export const Line = styled.hr`
  text-align: center;
  margin: 1% 2%;
  border: 0.7px solid ${colors.iiBrown};
  background-color: ${colors.iiBrown};
  width: 95%;
  opacity: 0.3;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionName  = styled.h3`
  text-align: right;
  width: 60%;
  font-size: 2rem;
  word-break: keep-all;
  margin: 2%;
`;