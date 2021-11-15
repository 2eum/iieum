import styled from "styled-components";
import * as colors from "../../Colors";

export const OpenedContainer = styled.div`
  // border: 1px solid #abaaa6;
  width: ${(p) => (p.open ? "71vw" : 0)};
  height: ${(p) => (p.open ? "80%" : 0)};
  opacity: ${(p) => (p.open ? 1 : 0)};
  position: relative;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  text-align: center;

  ${(p) => (p.gridNum === 0 ? "" : 
    p.gridNum === 1 ? `transform: translateX(-35.5%);` : 
    `transform: translateX(-71%);`)
  }

`;



export const QuestionContainer= styled.div`
`;

export const Question = styled.h3`
  margin: 3%;
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

