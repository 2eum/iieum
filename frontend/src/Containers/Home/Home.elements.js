import styled from "styled-components";
import { BannerContainer, DefaultButton } from "../../globalStyles";
import * as colors from "../../Colors";
import { Link } from "react-router-dom";

export const Background = styled.div`
  height: 100vh;
  background-color: ${colors.iiBG};
  padding: 10% 15%;
`;

export const QuestionPageContainer = styled.section`
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