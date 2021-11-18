import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const OpenedContainer = styled.div`
  width: 60vw;
  margin-top: 3vw;
  flex-direction: column;
  // padding: 2%;
`;

export const MusicContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 15vw;
  height: 6vw;
`;

export const PostCardContainer = styled.div`
  width: 100%;
  height: 57vh;
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