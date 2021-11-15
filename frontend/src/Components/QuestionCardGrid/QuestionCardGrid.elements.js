import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const QuestionGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 18vw);
  grid-gap: 3vw;
  margin: 3% auto;
  width: 100%;
`;

export const QuestionCardWrapper = styled.div`
  text-align: center;
`;
