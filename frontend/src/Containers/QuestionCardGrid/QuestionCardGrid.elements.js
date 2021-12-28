import styled from 'styled-components';
import * as colors from '../../styles/Colors';

export const QuestionGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 29vw);
  grid-gap: 1.5vw;
  margin: 3% auto;
  width: 100%;

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(3, 19vw);
  }

  @media screen and (max-width: 1279px) {
    grid-template-columns: repeat(2, 48%);
    column-gap: 2%;
    row-gap: 8%;
  }
`;

export const QuestionCardWrapper = styled.div`
  text-align: center;
`;
