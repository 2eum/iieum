import { Link } from "react-router-dom";
import styled from "styled-components";
import * as colors from "../../styles/Colors";
import { CustomButton } from "../../styles/globalStyles";

export const LoginSection = styled.main`
  width: 80%;

  margin: auto;
  margin-top: 4rem;

  text-align: center;
`;

export const LoginForm = styled.div`
  width: 45%;
  margin: 5% auto;
  padding: 2% 8%;

  text-align: center;

  background-color: ${colors.iiBG};
  // box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 20%);
`;

export const LoginFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  margin: 8% auto;

  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

export const LoginLegend = styled.legend`
  margin: 5% auto 10% auto;
  padding: 5%;

  color: ${colors.iiBrown};
  font-size: 1.5rem;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5%;
`;

export const LoginInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: none;
  border-bottom: 1px solid ${colors.iiBrown};
  background-color: ${colors.iiBG};

  &:focus {
    outline: none;
  }
`;

export const LoginBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginBtn = styled(CustomButton)`
  width: 100%;

  margin: 0 auto 1rem auto;
`;

export const ToSignUpLink = styled(Link)`
  align-self: flex-end;

  font-size: 0.8rem;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  margin-bottom: 5%;
`;
