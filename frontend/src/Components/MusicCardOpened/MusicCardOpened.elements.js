import styled from "styled-components";
import * as colors from "../../styles/Colors";
import * as g from "../../styles/globalStyles";

export const OpenedContainer = styled.div`
  width: 100%;
  margin-top: 3vw;
  flex-direction: column;
  @media screen and (min-width: 1920px) {
    width: 60vw;
  }
`;

export const MusicContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 18rem;
  height: 7.5rem;
`;

export const PostCardContainer = styled.div`
  width: 100%;
  height: 55rem;
  overflow: scroll;
`;

export const PostCardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.7vw;
  margin: 4% auto;
`;

export const PostCardWrapper = styled.div`
  margin: 2%;
`;
