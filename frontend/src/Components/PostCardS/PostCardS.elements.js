import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const PostCardArea = styled.section`
  width: 215px;
  height: 286px;
  margin: 2% auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: ${colors.nearWhite};
  box-shadow: ${g.CardShadow};
  border-radius: 8px;
  border: 1px solid #ABAAA6;
`;

export const TopArea = styled.section`
  height: 5%;
  margin: 1.2%;
`;

export const Author = styled.h6`
`;

export const MusicArea = styled.section`
  height: 70%;
  width:100%;
  margin: 1% auto;
`;

export const MusicCover = styled.img`
  width: 66%;
  margin: 1%;
`;

export const MusicInfoArea = styled.div`
  height: 26%;
  margin-bottom: 2%;
`;

export const MusicTitleWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MusicTitle = styled.h3`
  margin-bottom: 1%;
  font-weight: 400;
  opacity: 0.75;
`;

export const MusicArtist = styled.h6`
  margin: 1%;
  font-weight: 400;
  opacity: 0.75;
`;

export const TitleArea = styled.section`
  width: 100%;
  height: 26%;
  overflow: hidden;
`;

export const ContentTitle = styled.h3`
  word-break: keep-all;
`;