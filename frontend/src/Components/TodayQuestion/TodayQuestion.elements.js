import styled from 'styled-components';
import { CardShadow, CustomLink } from '../../styles/globalStyles';
import * as colors from '../../styles/Colors';

export const TodayLeftContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`;

export const TodayRightContainer = styled.section`
  width: 50%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`;

export const QuestionArea = styled.section``;

export const QuestionAreaTop = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

export const ShuffleButton = styled.p`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
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

  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
  }
`;

export const QDate = styled.h5`
  font-size: 1.2rem;
`;

export const Question = styled.h2`
  font-size: 3rem;
  @media screen and (max-width: 1279px) {
    font-size: 2rem;
  }
`;

export const PostCardSArea = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }
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

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  width: 34rem;
  height: 15rem;
  background-color: ${colors.iiBeige};
  box-shadow: ${CardShadow};
  border-radius: 8px;
  border: 1px solid #abaaa6;
`;

export const EmptyMessage = styled.p`
  font-size: 1.2rem;
  text-align: center;
  line-height: 2;
`;
