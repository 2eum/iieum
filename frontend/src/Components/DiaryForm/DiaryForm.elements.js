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

export const FormTopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  align-items: center;
`;

export const FormTitle = styled.input`
  height: 2rem;
  width: 30%;
  padding: 1rem;
`;

export const MusicSearch = styled.input`
  height: 2rem;
  width: 30%;
  padding: 1rem;
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

export const SaveButton = styled.button`
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
