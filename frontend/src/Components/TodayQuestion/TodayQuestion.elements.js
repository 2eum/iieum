import styled from "styled-components";
import { DefaultButton, ButtonShadow } from "../../styles/globalStyles";

import * as colors from "../../styles/Colors";
import { HashLink as Link } from "react-router-hash-link";

export const TodayLeftContainer = styled.div`
  width: 50%;
`;

export const TodayRightContainer = styled.section`
  width: 50%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const QuestionArea = styled.section`
  font-size: 3rem;
`;

export const ShuffleButton = styled.div`
  cursor: pointer;
  display: flex;
  gap: 3%;
  align-items: center;
  font-size: 1.5rem;
  height: 2rem;
`;

export const TodayQuestion = styled.div`
  margin-top: 5%;
`;

export const QDate = styled.h5`
  font-size: 1.2rem;
`;

export const Question = styled.h2`
  font-size: 3rem;
`;

export const PostCardSArea = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const TodaySTop = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
`;

export const PostCardSWrapper = styled.section`
  width: 80%;
  margin: 5% 0;
  display: flex;
  justify-content: center;
  gap: 1%;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
`;

export const LoadMoreButtonContainer = styled.div`
  width: 5%;
  cursor: pointer;
`;

export const AnswerButton = styled(Link)`
  width: 30%;
  margin: 3% 0;
  padding: 0.5rem 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.iiPurple};
  box-shadow: ${ButtonShadow};
  font-size: 1rem;
  font-weight: 300;
  color: ${colors.iiBeige};
  cursor: pointer;

  i {
    color: ${colors.iiBeige};
    margin-right: 5%;
  }

  &:hover {
    background-color: ${colors.iiBeige};
    border: solid 1px ${colors.iiPurple};
    i {
      color: ${colors.iiPurple};
    }
  }

  transition: all 100ms;
`;
