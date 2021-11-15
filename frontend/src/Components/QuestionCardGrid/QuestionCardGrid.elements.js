import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const QuestionGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  grid-gap: 5vw;
  margin: 3% auto;
  width: 100%;
`;

export const QuestionCardWrapper = styled.div`
  text-align: center;
`;
