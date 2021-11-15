import styled from "styled-components";
import * as colors from "../../Colors";

export const OpenedContainer = styled.div`
  width: 60vw;
  height: ${(p) => (p.open ? "75%" : 0)};
  opacity: ${(p) => (p.open ? 1 : 0)};
  display: ${(p) => (p.open ? `flex` : `none`)};
  position: relative;
  margin-top: 5vw;
  flex-direction: column;
  text-align: center;

  ${(p) =>
    p.gridNum === 0
      ? ""
      : p.gridNum === 1
      ? `transform: translateX(-21vw);`
      : `transform: translateX(-42vw);`}
`;

export const QuestionContainer = styled.div``;

export const Question = styled.h3`
  margin: 2%;
`;

export const QuestionDetails = styled.p`
  margin: 2%;
`;

export const CreateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CreateButtonWrapper = styled.div`
  width: 15%;
  margin: 2%;
`;

export const CardListContainer = styled.div`
  width: 100vw;
`;
