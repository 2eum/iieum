import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageHeader = styled.h3`
  font-size: 3rem;
  @media screen and (max-width: 1279px) {
    font-size: 1.8rem;
  }
`;

export const PageHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
`;

//1. Today Question Page

export const TodayQuestionSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;

  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
`;

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

//2. Create Page
export const CreatePageSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 15% auto;
`;

export const CreateCardLeft = styled.section`
  width: 25%;
  height: 50rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CreateCardRight = styled.section`
  width: 25%;
  height: 50rem;
  margin: 4% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HelperQuestionArea = styled.div`
  height: 70px;
  margin: 16px 0;
  padding-top: 20px;
`;

export const HelperSearchArea = styled.div`
  height: 136px;
  margin: 16px 0;
  padding-top: 10px;
`;

export const HelperContentArea = styled.div`
  height: 300px;
  margin: 16px 0;
  padding-top: 60px;
`;

export const HelperDoneArea = styled.div`
  height: 30px;
  margin: 16px 0;
`;

export const HelperLeft = styled.p`
  text-align: right;
`;

export const HelperRight = styled.p`
  text-align: left;
`;

export const DoneButtonArea = styled.div`
  margin: 16px 0;
`;

//3.Question List Page

export const QuestionListPageSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15% auto;
`;

export const ToQuestionListButton = styled(Link)`
  margin: 2%;
  font-size: 1.2rem;

  @media screen and (max-width: 1279px) {
    font-size: 1rem;
    width: max-content;
  }
`;

export const QuestionListContainer = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8%;
  margin: 3% 0;
`;

//4. Music List Page

export const MusicListPageSection = styled.section`
  margin-top: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
