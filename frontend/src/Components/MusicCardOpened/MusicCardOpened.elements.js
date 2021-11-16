import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const OpenedContainer = styled.div`
  width: 60vw;
  height: ${(p) => (p.open ? "75%" : 0)};
  opacity: ${(p) => (p.open ? 1 : 0)};
  display: ${(p) => (p.open ? `flex` : `none`)};
  position: relative;
  margin-top: 5vw;
  flex-direction: column;
  text-align: center;

  ${(p) =>
    p.gridNum === 0
      ? ""
      : p.gridNum === 1
      ? `transform: translateX(-21vw);`
      : `transform: translateX(-42vw);`}
`;

export const MusicContainer = styled.div``;


export const PostCardGrid = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3vw;
  margin: 3% auto;
`;

export const PostCardWrapper = styled.div`
    margin: 2%;
`;