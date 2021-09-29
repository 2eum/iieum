import styled from "styled-components";
import { nearWhite } from "../../Colors";

export const MusicWrapper = styled.section`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MusicCover = styled.img`
  width: 80%;

  margin: auto;

  filter: drop-shadow(3px 3px 3px #000);
`;

export const MusicTitle = styled.p`
  margin: 0.5rem auto;

  text-align: center;
  color: ${(props) => (props.fontColor === "black" ? "#000" : { nearWhite })};
`;

export const MusicArtist = styled.p`
  margin: 0.5rem auto;

  font-size: 0.8rem;
  text-align: center;
  color: ${(props) => (props.fontColor === "black" ? "#000" : { nearWhite })};
`;
