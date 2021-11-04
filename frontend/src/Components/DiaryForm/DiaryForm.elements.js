import styled from "styled-components";
import { DefaultButton } from "../../globalStyles";
import { pink, nearWhite } from "../../Colors";

export const FormArea = styled.form`
  width: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;

  *:focus {
    outline: none;
  }
`;

export const FormQuestion = styled.select`
  width: 50%;
  height: 2rem;
  padding-left: 0.5rem;

  margin-top: 4rem;
`;
export const FormTopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 6rem;
  align-items: center;
`;

export const FormTitle = styled.input`
  height: 2rem;
  width: 30%;
  padding: 1rem;
`;

export const SearchSection = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const MusicSearch = styled.input`
  height: 2rem;
  width: 100%;
  padding: 1rem;
`;

export const SearchedContainer = styled.div`
  background-color: #ffffff;
  overflow-y: scroll;
  width: 100%;
  height: 30vh;
  position: absolute;
  top: 2.5rem;
  z-index: 5;
  border: 1px solid #000;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FormBody = styled.textarea`
  margin: 1.5rem 10% 2rem 10%;
  width: 100%;
  height: 40vh;
  padding: 1.5rem;
  line-height: 1.5rem;
  margin-left: auto;
  border-radius: 0.125rem;
`;

export const SaveButton = styled.p`
  padding: 0.5rem 1.5rem;

  border: none;
  border-radius: 5px;

  background-color: ${pink};

  font-size: 1.3rem;
  font-weight: 600;
  color: ${nearWhite};

  cursor: pointer;

  width: 10rem;
  padding: 0.5rem 2rem;
  display: inline;
  align-self: flex-end;
  text-align: center;
`;

export const SelectionContainer = styled.div`
  width: 30%;
`;
