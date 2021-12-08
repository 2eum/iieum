import styled from "styled-components";
import { CustomLink } from "../../styles/globalStyles";

export const OpenedContainer = styled.div`
  width: 90vw;
  height: ${(p) => (p.open ? "fit-content" : 0)};
  opacity: ${(p) => (p.open ? 1 : 0)};
  display: ${(p) => (p.open ? `flex` : `none`)};
  position: relative;
  margin-top: 5vw;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  ${(p) =>
    p.gridNum === 0
      ? ""
      : p.gridNum === 1
      ? `transform: translateX(-30.5vw);`
      : `transform: translateX(-61vw);`}

  @media screen and (min-width: 1920px) {
    width: 60vw;
    ${(p) =>
      p.gridNum === 0
        ? ""
        : p.gridNum === 1
        ? `transform: translateX(-20.5vw);`
        : `transform: translateX(-41vw);`}
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Question = styled.h2`
  margin: 0 auto;
`;

export const QuestionDetails = styled.p`
  margin: 2% auto;
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
  width: 100%;
`;

export const AnswerButton = styled(CustomLink)`
  margin: 3% auto;
`;
