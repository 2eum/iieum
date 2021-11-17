import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";



export const MusicListContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8%;
  margin: 5% auto;
`;

export const MusicCardWrapper = styled.div`
  width: 13vw;
  height: 6vw;
  border: 1px solid ${colors.cardStroke};
  border-radius: 5px;
  box-shadow: ${g.CardShadow};
  ${(p) =>
    p.open === true
      ? `border: 1px solid ${colors.iiPurple};`
      : `border: 1px solid ${colors.cardStroke};`}
`;
