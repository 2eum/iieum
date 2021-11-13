import styled from "styled-components";

export const CardListContainer = styled.section`
  // fixed position 사용 위해 필요
  transform: scale(1);
  margin: 0 10vw;
  @media screen and (min-width: 1920px) {
    margin: 0 15vw;
  }
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.cols}, 1fr);
  width: ${(p) => p.cols * 25}%;
  position: relative;
  height: 50vw;
  overflow-y: scroll;
  grid-row-gap: 3%;
  margin-top: 3%;
`;

export const PostCardLContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  opacity: ${(p) => (p.cols === 2 ? 1 : 0)};
  z-index: ${(p) => (p.cols === 2 ? 1 : -1)};
  transition: opacity 500ms;
  width: 50%;
  height: 50vw;
`;
