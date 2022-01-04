import styled from 'styled-components';

export const CardListContainer = styled.section`
  // fixed position 사용 위해 필요
  transform: scale(1);
  height: 55rem;
  width: 100%;
  display: flex;
  @media screen and (max-width: 1279px) {
    height: max-content;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.cols}, 1fr);
  grid-template-rows: max-content;
  width: ${(p) => (p.cols === 5 ? '100%' : '50%')};
  grid-row-gap: 5%;
  position: relative;
  overflow-y: scroll;
  height: 100%;

  @media screen and (min-width: 1920) {
    width: ${(p) => p.cols * 12}vw;
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5%;
  overflow: scroll;
  flex-wrap: nowrap;
  overflow-x: auto;
  height: 13rem;

  & > * {
    flex: 0 0 auto;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PostCardLContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  opacity: ${(p) => (p.cols === 2 ? 1 : 0)};
  z-index: ${(p) => (p.cols === 2 ? 1 : -1)};
  transition: opacity 500ms;
  /* height: 55rem; */
  padding: auto;

  @media screen and (max-width: 1279px) {
    position: relative;
  }
`;
