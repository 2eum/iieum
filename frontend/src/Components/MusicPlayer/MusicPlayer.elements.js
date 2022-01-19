import styled from "styled-components";
import * as colors from "../../styles/Colors";

export const SourceAudio = styled.audio`
  display: none;
`;

export const PlayerContainer = styled.div`
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: flex-end;
`;

export const PlayerButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  i {
    color: ${colors.iiPurple};
    font-size: 1.5rem;
    @media screen and (max-width: 1279px) {
      font-size: 1rem;
    }
  }
`;

export const PlayerBase = styled.div`
  width: 7rem;
  height: 0.5rem;
  border-radius: 15px;
  background-color: ${colors.iiPurpleOpacity};
  position: relative;
  overflow: hidden;
`;

export const PlayerProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(p) => p.width}%;
  height: 100%;
  content: "";
  background-color: ${colors.iiPurple};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;
