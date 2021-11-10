import styled from "styled-components";

export const CardListContainer = styled.section`
  // fixed position 사용 위해 필요
  transform: scale(1);
  width: 1100px;
  margin: auto;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.cols}, 1fr);
  width: ${(p) => p.cols * 25}%;
  position: relative;
  height: 780px;
  overflow-y: scroll;
`;

export const PostCardLContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  opacity: ${(p) => (p.cols === 2 ? 1 : 0)};
  z-index: ${(p) => (p.cols === 2 ? 1 : -1)};
  transition: opacity 500ms;
`;
