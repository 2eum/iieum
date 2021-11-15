import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const QuestionGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5vh;
  margin: 3% 0;
`;

export const QuestionCardWrapper = styled.div`
  width: 10vw;
  text-align: center;
  cursor: pointer;
`;
