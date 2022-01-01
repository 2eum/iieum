import styled from 'styled-components';
import * as colors from '../../styles/Colors';
import { slide } from '../../styles/globalStyles';

export const Wrapper = styled.section`
  display: flex;
  padding: 1vw;

  @media screen and (max-width: 1279px) {
    padding: 5%;
  }
`;

export const Cover = styled.img`
  width: 35%;

  margin: auto;

  filter: drop-shadow(3psx 3px 3px #000);
`;

export const Info = styled.div`
  margin-right: 3%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleWrapper = styled.div`
  height: 1.6rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.p`
  text-align: right;
  white-space: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  //slide animation
  animation: ${(p) => (p.slide ? slide : '')} 10s linear infinite;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10%;
`;

export const ArtistWrapper = styled.div`
  height: 1.6rem;
  width: 65%;
  position: relative;
  overflow: hidden;
`;

export const Artist = styled.p`
  text-align: right;
  color: ${colors.iiBrown};
  white-space: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 0.8rem;
  opacity: 0.8;
  //slide animation
  animation: ${(p) => (p.slide ? slide : '')} 10s linear infinite;
`;

export const SourceLink = styled.a`
  width: 10%;
  & img {
    width: 100%;
    object-fit: contain;
  }
`;

export const NoPreviewSrc = styled.p`
  font-size: 0.8rem;
  color: ${colors.iiBrown};
`;
