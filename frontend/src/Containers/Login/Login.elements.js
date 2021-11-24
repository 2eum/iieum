import { Link } from "react-router-dom";
import styled from "styled-components";
import { beige, lightBrown, lightGray, nearWhite } from "../../Colors";

export const LoginSection = styled.main`
  width: 80%;

  margin: auto;
  margin-top: 30vh;

  text-align: center;
`;

export const LoginForm = styled.div`
  width: 45%;
  margin: 5% auto;
  padding: 2% 8%;

  text-align: center;

  background-color: ${nearWhite};
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 20%);
`;

export const LoginFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  margin: 7% auto;

  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

export const LoginLegend = styled.legend`
  margin: 5% auto 10% auto;

  color: ${lightBrown};
  font-size: 1.3rem;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5%;
`;

export const LoginInput = styled.input`
  padding: 0.5rem;

  border-radius: 5px;
  border: 1px solid ${lightGray};

  &:focus {
    outline: none;
  }
`;

export const LoginBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginBtn = styled.button`
  width: 100%;

  margin: 0 auto 1rem auto;
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

export const ToRegisterLink = styled(Link)`
  align-self: flex-end;

  font-size: 0.8rem;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  margin-bottom: 5%;
`;
