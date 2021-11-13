import styled from "styled-components";
import * as colors from "../../Colors";
import { Link } from "react-router-dom";

export const Background = styled.div`
  // height: 100vh;
  background-color: ${colors.iiBG};
  padding: 10% 15%;
`;

//1. Question Page

export const TodayQuestionSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  // margin: 5%;
`;

export const RightContainer = styled.section`
  width: 40%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const QuestionArea = styled.section``;

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

export const PostCardSWrapper = styled.section`
  display: flex;
  justify-content: center;
`;


//2. Create Page
export const CreateSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 15% auto;
`;

export const CreateCardLeft = styled.section`
  width: 25%;
  height: 100%;
  margin: 4% auto;
`;

export const CreateCardRight = styled.section`
  width: 25%;
  height: 100%;
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

export const QuestionListSection = styled.section`

`;

export const QuestionHeaderContainer = styled.div``;

export const QuestionHeader = styled.h3``;

export const ToQuestionListButton = styled(Link)``;