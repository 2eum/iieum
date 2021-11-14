import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const PostCardArea = styled.section`
  width: 17vw;
  height: 23vw;
  margin: 0 auto;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1%;
  text-align: center;
  background-color: ${colors.iiBeige};
  box-shadow: ${g.CardShadow};
  border-radius: 8px;
  border: 1px solid #abaaa6;
  position: relative;

  @media screen and (min-width: 1920px) {
    width: 15vw;
    height: 20vw;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const TopArea = styled.section`
  height: 5%;
  margin: 1.2%;
`;

export const Author = styled.h4``;

export const MusicArea = styled.section`
  width: 100%;
  margin: 1% auto;
`;

export const MusicCover = styled.img`
  width: 66%;
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
  animation: ${(p) => (p.slide ? g.slide : "")} 10s linear infinite;
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
  animation: ${(p) => (p.slide ? g.slide : "")} 10s linear infinite;
`;

export const TitleArea = styled.section`
  width: 100%;
  overflow: hidden;
`;

export const ContentTitle = styled.h3`
  word-break: keep-all;
`;
