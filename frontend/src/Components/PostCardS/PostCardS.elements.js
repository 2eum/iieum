import styled from "styled-components";
import * as colors from "../../styles/Colors";
import { CardShadow, slide } from "../../styles/globalStyles";

export const PostCardArea = styled.section`
  width: 13rem;
  height: 20rem;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1%;
  text-align: center;
  background-color: ${colors.iiBeige};
  box-shadow: ${CardShadow};
  border-radius: 8px;
  // border: 1px solid #abaaa6;

  ${(p) =>
    p.open === true
      ? `border: 1px solid ${colors.iiPurple};`
      : `border: 1px solid ${colors.cardStroke};`}

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &:hover {
    border: 1px solid ${colors.iiPurple};
  }

  transition: border 100ms;
`;

export const TopArea = styled.section``;

export const Author = styled.p`
  font-size: 1.3rem;
  font-family: "Daughter_handwriting";
`;

export const MusicArea = styled.section`
  width: 100%;
  margin: 1% auto;
`;

export const MusicCover = styled.img`
  width: 80%;
  margin: 1%;
`;

export const MusicInfoArea = styled.div`
  margin-bottom: 2%;
`;

export const MusicTitleWrapper = styled.div`
  width: 100%;
  height: 1.8rem;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

export const MusicTitle = styled.h3`
  margin-bottom: 1%;
  font-weight: 400;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: ${(p) => (p.slide ? slide : "")} 10s linear infinite;
`;

export const MusicArtistWrapper = styled.div`
  width: 100%;
  height: 1.6rem;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

export const MusicArtist = styled.h4`
  margin: 1%;
  font-weight: 400;
  opacity: 0.75;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: ${(p) => (p.slide ? slide : "")} 10s linear infinite;
`;

export const TitleArea = styled.section`
  width: 100%;
  height: 3rem;
  overflow: hidden;
`;

export const ContentTitle = styled.p`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5rem;
`;
