import styled from "styled-components";
import { nearWhite } from "../../Colors";

export const MusicWrapper = styled.section`
  width: 20%;
`;

export const MusicCover = styled.img`
  width: 80%;

  margin: auto;

  filter: drop-shadow(3px 3px 3px #000);
`;

export const MusicTitle = styled.p`
  margin: 0.5rem auto;

  color: ${nearWhite};
`;

export const MusicArtist = styled.p`
  margin: 0.5rem auto;

  font-size: 0.8rem;

  color: ${nearWhite};
`;
