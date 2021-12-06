import styled from "styled-components";
import * as colors from "../../styles/Colors";
import * as g from "../../styles/globalStyles";

export const QuestionGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 29vw);
  grid-gap: 1.5vw;
  margin: 3% auto;
  width: 100%;

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(3, 19vw);
  }
`;

export const QuestionCardWrapper = styled.div`
  text-align: center;
`;
