import styled from "styled-components";

export const CardListContainer = styled.section`
  // fixed position 사용 위해 필요
  transform: scale(1);
  margin-top: 3%;
  height: 50vw;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.cols}, 1fr);
  grid-template-rows: max-content;
  width: ${(p) => p.cols * 14}vw;
  position: relative;
  overflow-y: scroll;
  grid-gap: 3%;
  height: 100%;
`;

export const PostCardLContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  opacity: ${(p) => (p.cols === 3 ? 1 : 0)};
  z-index: ${(p) => (p.cols === 3 ? 1 : -1)};
  transition: opacity 500ms;
  height: 50vw;
  padding: auto;
`;
