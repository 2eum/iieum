import styled from "styled-components";
import * as colors from "../../styles/Colors";
import { NavLink } from "react-router-dom";

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

export const PasswordSubmit = styled.p`
  margin: 0 auto 1rem auto;
  padding: 0.4rem 2rem;

  border-radius: 4px;
  border: none;

  background-color: ${colors.iiPurple};

  color: ${colors.iiBeige};
  font-size: 1.1rem;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: ${colors.iiBrown};
  }
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

export const NewItemSubmit = styled.div`
  margin: 0 auto 1rem auto;
  padding: 0.4rem 2rem;
  width: max-content;

  border-radius: 4px;
  border: none;

  background-color: ${colors.iiPurple};

  color: ${colors.iiBeige};
  font-size: 1.1rem;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: ${colors.iiBrown};
  }
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

export const NicknameDuplicateCheck = styled.div`
  padding: 0.5rem;
  width: max-content;
  height: max-content;
  background-color: transparent;
  border: 1px solid ${colors.iiPurple};
  border-radius: 5px;
  cursor: pointer;
  color: ${colors.iiPurple};

  &:focus {
    outline: none;
  }
`;

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
