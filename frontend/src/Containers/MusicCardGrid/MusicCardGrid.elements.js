import styled from "styled-components";
import * as colors from "../../styles/Colors";
import { CardShadow } from "../../styles/globalStyles";

export const MusicListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 5%;
  margin: 5% auto;
`;

export const MusicCardWrapper = styled.div`
  cursor: pointer;
  width: 18rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.cardStroke};
  border-radius: 5px;
  box-shadow: ${CardShadow};
  border: 1px solid ${(p) => (p.open ? colors.iiPurple : colors.cardStroke)};

  &:hover {
    border: 1px solid ${colors.iiPurple};
  }
`;
