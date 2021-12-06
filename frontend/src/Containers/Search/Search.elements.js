import styled from "styled-components";
import * as colors from "../../styles/Colors";

export const KeyWordContainer = styled.div`
  margin: 5%;
`;
export const KeywordResult = styled.p`
  margin: 0 auto;
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
`;

// Search Bar
export const SearchBarContainer = styled.div`
  width: 25%;
  margin: 0 auto;

  padding: 0 1rem;

  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 13rem;
  height: 2rem;

  padding: 2rem 0.7rem;

  font-size: 1.7rem;

  border: none;

  border-bottom: solid 1px ${colors.cardStroke};

  background-color: ${colors.iiBG};

  text-align: center;

  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.div`
  width: 1rem;
  height: 2rem;

  padding: 0.5rem;
  cursor: pointer;

  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: ${colors.iiBG};

  & i {
    color: ${colors.iiBrown};
    opacity: 0.7;
  }
`;

export const Keyword = styled.span`
  color: ${colors.iiPurple};
  font-size: 2rem;
`;

export const ResultTitle = styled.h1`
  margin: 7% 0 2% 1%;
  // color: ${colors.iiPurple};
`;

export const NoResultWrapper = styled.div`
  margin: 5% auto;
  text-align: center;
`;

export const NoResult = styled.p`
  margin: 3% 0 7% 1%;
`;

export const PostResultContainer = styled.div``;

export const QuestionResultContainer = styled.div``;

export const MusicResultContainer = styled.div``;
