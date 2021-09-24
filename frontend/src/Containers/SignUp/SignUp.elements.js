import { Link } from "react-router-dom";
import styled from "styled-components";
import { beige, lightBrown, lightGray, nearWhite } from "../../Colors";

export const RegisterSection = styled.main`
  width: 80%;

  margin: auto;

  text-align: center;
`;

export const RegisterForm = styled.div`
  width: 25%;
  margin: 5% auto;

  text-align: center;
`;

export const RegisterFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  margin: 7% auto;

  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

export const RegisterLegend = styled.legend`
  margin: 3% auto;
  padding: 5%;

  border-bottom: 2px solid ${lightBrown};

  color: ${lightBrown};
  font-size: 1.5rem;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5%;
`;

export const InputLabel = styled.label`
  align-self: flex-start;

  margin: 3% 0;

  text-align: left;
`;

export const RegisterInput = styled.input`
  padding: 0.5rem;

  border-radius: 5px;
  border: 1px solid ${lightGray};

  &:focus {
    outline: none;
  }
`;

export const RegisterBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RegisterBtn = styled.button`
  width: 100%;

  margin: 1rem auto;
  padding: 0.4rem 0;

  border-radius: 4px;
  border: none;

  background-color: ${beige};

  color: ${nearWhite};
  font-size: 1.1rem;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: ${lightBrown};
  }
`;

export const ToLoginLink = styled(Link)`
  font-size: 0.9rem;
`;
