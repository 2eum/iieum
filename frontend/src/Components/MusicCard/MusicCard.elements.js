import styled from "styled-components";
import * as colors from "../../Colors";

export const Wrapper = styled.section`
  display: flex;
  width: 70%;
`;

export const Cover = styled.img`
  width: 30%;

  margin: auto;

  filter: drop-shadow(3psx 3px 3px #000);
`;

export const Info = styled.div`
  margin-right: 3%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.p`
  text-align: right;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10%;
`;

export const Artist = styled.p`
  text-align: right;
  color: ${colors.littleDarkGray};
`;

export const SourceLink = styled.a`
  width: 10%;
  & img {
    width: 100%;
    object-fit: contain;
  }
`;
