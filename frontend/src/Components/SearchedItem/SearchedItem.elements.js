import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1vh;
  display: flex;
  gap: 5%;
  border-bottom: 1px solid #000;
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
export const Cover = styled.img`
  width: 25%;
`;
export const Link = styled.img`
  width: 1rem;
  margin-right: 1vh;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const SelectButton = styled.p`
  border: 1px solid #000;
  background-color: transparent;
  cursor: pointer;
  width: 3rem;
  text-align: center;
`;
