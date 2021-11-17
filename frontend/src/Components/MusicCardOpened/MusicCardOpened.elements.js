import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const OpenedContainer = styled.div`
  width: 60vw;
  position: relative;
  margin-top: 5vw;
  flex-direction: column;
  text-align: center;
`;

export const MusicContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;


export const PostCardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3vw;
  margin: 3% auto;
`;

export const PostCardWrapper = styled.div`
    margin: 2%;
`;