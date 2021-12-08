import styled from "styled-components";
import { ButtonShadow, CustomLink } from "../../styles/globalStyles";
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

export const QuestionArea = styled.section``;

export const ShuffleButton = styled.p`
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: max-content;

  &:hover {
    color: ${colors.iiPurple};

    i {
      color: ${colors.iiPurple};
    }
  }
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

export const AnswerButton = styled(CustomLink)`
  margin: 3% 0;
`;
