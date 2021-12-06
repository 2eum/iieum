import { Link } from "react-router-dom";
import styled from "styled-components";
import { nearWhite } from "../../styles/Colors";

export const ContentArea = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

export const QuestionWrapper = styled.h1``;

export const Content = styled.article`
  margin-top: 2rem;
`;

export const ContentPubDate = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 2rem 2.5rem;
  margin-bottom: 2rem;

  background-color: ${nearWhite};
`;

export const PreviewMusic = styled.div`
  width: 25%;
  padding: 1.5rem;
  text-align: center;
`;

export const AlbumImg = styled.img`
  width: 100%;
  margin: 1rem auto;
`;

export const MusicTitle = styled.p`
  font-size: 1.5rem;
  margin: 1rem auto;
`;

export const MusicArtist = styled.p`
  margin: 1rem auto;
`;

export const PreviewDiary = styled.div`
  width: 70%;
  margin: 5% auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DiaryTitle = styled(Link)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const DiaryBody = styled.p`
  margin-top: 5%;
  line-height: 1.5;
`;
