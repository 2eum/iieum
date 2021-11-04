import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1vh;
  display: flex;
  gap: 5%;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
`;

export const Title = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  @media screen and (max-width: 1919px) {
    max-width: 100px;
  }
`;
export const Artist = styled.p`
  color: #aaaaaa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  @media screen and (max-width: 1919px) {
    max-width: 100px;
  }
`;
export const Cover = styled.img``;
export const Link = styled.img`
  width: 1rem;
  margin-right: 1vh;
`;
export const Preview = styled.audio``;

export const SelectButton = styled.button``;
