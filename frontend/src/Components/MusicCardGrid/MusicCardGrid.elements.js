import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

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
  box-shadow: ${g.CardShadow};
  ${(p) =>
    p.open === true
      ? `border: 1px solid ${colors.iiPurple};`
      : `border: 1px solid ${colors.cardStroke};`}
`;
