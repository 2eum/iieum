import styled from "styled-components";
import * as colors from "../../styles/Colors";
import { CardShadow } from "../../styles/globalStyles";

export const MusicListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 5%;
  margin: 5% auto;

  @media screen and (max-width: 1279px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    height: 6.5rem;

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

export const MusicCardWrapper = styled.div`
  cursor: pointer;
  width: 18rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.cardStroke};
  border-radius: 5px;
  box-shadow: ${CardShadow};
  border: 1px solid ${(p) => (p.open ? colors.iiPurple : colors.cardStroke)};

  padding: 1rem;

  &:hover {
    border: 1px solid ${colors.iiPurple};
  }

  @media screen and (max-width: 1279px) {
    width: 13rem;
    height: 5.5rem;
    padding: 0.5rem;

    & > * {
      font-size: 0.9rem;
    }
  }
`;
