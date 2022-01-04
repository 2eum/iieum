import styled from 'styled-components';

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
  height: max-content;
  overflow: scroll;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PostCardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.7vw;
  margin: 4% auto;

  @media screen and (max-width: 1279px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 1rem;
    height: 31rem;

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
  }
`;

export const PostCardWrapper = styled.div`
  margin: 2%;
`;
