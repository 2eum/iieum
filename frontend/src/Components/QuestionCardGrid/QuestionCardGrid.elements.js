import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const QuestionGridContainer = styled.div`
  // width: 25vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8%;
  margin: 3% 0;
`;

export const QuestionCardWrapper = styled.div`
  width: 10vw;
  // height: 15vh;
  text-align: center;
`;