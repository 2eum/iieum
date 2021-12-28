import styled from 'styled-components';
import * as colors from '../../styles/Colors';
import { CardShadow } from '../../styles/globalStyles';

export const QuestionCardContainer = styled.div`
  width: 22rem;
  height: 12rem;
  margin: auto;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1%;
  text-align: center;
  background-color: ${colors.iiBeige};
  box-shadow: ${CardShadow};
  border-radius: 8px;

  ${(p) =>
    p.open === true
      ? `border: 1px solid ${colors.iiPurple};`
      : `border: 1px solid ${colors.cardStroke};`}

  position: relative;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.iiPurple};
  }

  @media screen and (max-width: 1279px) {
    width: 10rem;
    height: 5rem;
  }

  transition: border 100ms;
`;

export const TopContainer = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-between;
  margin: 2%;

  @media screen and (max-width: 1279px) {
    height: max-content;
  }
`;

export const Qdate = styled.p`
  font-size: 1.3rem;

  @media screen and (max-width: 1279px) {
    font-size: 0.8rem;
  }
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

export const QuestionName = styled.h3`
  text-align: right;
  width: 80%;
  font-size: 1.5rem;
  word-break: keep-all;
  margin: 2%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 2rem;
  height: 6rem;

  @media screen and (max-width: 1279px) {
    font-size: 1rem;
    line-height: 1.25rem;
    -webkit-line-clamp: 2;
    height: 2.5rem;
  }
`;

export const OpenListButtonWrapper = styled.div`
  margin: 2%;
  margin-top: 20%;
  margin-bottom: 0;
  @media screen and (max-width: 1279px) {
    margin-top: 10%;
  }
`;

export const OpenListButtonIcon = styled.i`
  color: ${colors.iiPurple};
  margin-top: 10px;
  @media screen and (max-width: 1279px) {
    font-size: 1rem;
  }
`;
