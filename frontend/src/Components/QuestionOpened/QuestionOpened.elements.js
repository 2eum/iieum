import styled from "styled-components";
import * as colors from "../../styles/Colors";

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
  width: 100%;
`;

export const AnswerButton = styled(Link)`
  width: 30%;
  margin: 3% 0;
  padding: 0.5rem 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.iiPurple};
  box-shadow: ${ButtonShadow};
  font-size: 1rem;
  font-weight: 300;
  color: ${colors.iiBeige};
  cursor: pointer;

  i {
    color: ${colors.iiBeige};
    margin-right: 5%;
  }

  &:hover {
    background-color: ${colors.iiBeige};
    border: solid 1px ${colors.iiPurple};
    i {
      color: ${colors.iiPurple};
    }
  }

  transition: all 100ms;
`;
