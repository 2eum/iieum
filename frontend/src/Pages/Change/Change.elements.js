import styled from "styled-components";
import * as colors from "../../styles/Colors";
import { NavLink } from "react-router-dom";
import { CustomButton, CustomButtonInvert } from "../../styles/globalStyles";

export const ValidateSection = styled.section`
  margin-top: 10vh;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ValidateTitle = styled.h1`
  margin: 2rem;
`;

export const PasswordInput = styled.input`
  margin: 2rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${colors.iiBrown};
  background-color: ${colors.iiBG};
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const PasswordSubmit = styled(CustomButton)`
  margin: 0 auto 1rem auto;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 1rem;
`;

export const ChangeSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  height: 50vh;
`;

export const ContainerTitle = styled.h2`
  text-align: center;
`;

export const NewItemInput = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${colors.iiBrown};
  background-color: ${colors.iiBG};
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const NewItemSubmit = styled(CustomButton)`
  margin: 0 auto 1rem auto;
`;

export const NicknameChangeContainer = styled.div`
  width: 50%;
  border-right: 1px solid ${colors.iiBrown};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NicknameInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
`;

export const NicknameDuplicateCheck = styled(CustomButtonInvert)``;

export const NicknameConfirmed = styled.p`
  color: green;
`;

export const PasswordChangeContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
`;

export const HomeLink = styled(NavLink)`
  margin-top: 2rem;
`;
