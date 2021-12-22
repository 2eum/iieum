import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as colors from '../../styles/Colors';
import { CustomButton, CustomButtonInvert } from '../../styles/globalStyles';

export const AfterSent = styled.section`
  width: 80%;
  margin: 30% auto;
  text-align: center;

  @media screen and (min-width: 1920px) {
    margin-top: 10%;
  }
`;
export const SentMessage = styled.p`
  margin: 5%;
`;

export const SignUpSection = styled.main`
  width: 80%;

  margin: auto;
  margin-top: 4rem;

  text-align: center;
  @media screen and (min-width: 1920px) {
    margin-top: 4rem;
  }
`;

export const SignUpForm = styled.div`
  width: 40%;
  margin: 5% auto;

  text-align: center;
`;

export const SignUpFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  margin: 7% auto;

  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

export const SignUpLegend = styled.legend`
  margin: 3% auto;
  padding: 5%;

  border-bottom: 2px solid ${colors.iiPurpleOpacity};

  color: ${colors.iiBrown};
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

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SignUpInput = styled.input`
  padding: 0.5rem;
  background-color: ${colors.iiBG};
  border: none;
  // border-radius: 5px;
  border-bottom: 1px solid
    ${(p) =>
      p.duplicateChecked === false
        ? 'red'
        : p.duplicateChecked === true
        ? 'green'
        : colors.iiBrown};

  &:focus {
    outline: none;
  }
`;

export const DuplicateMessage = styled.span`
  color: red;
  font-size: 0.8rem;
`;

export const DuplicateConfirm = styled.p`
  color: green;
`;

export const DuplicateCheckButton = styled(CustomButtonInvert)``;

export const SignUpBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpBtn = styled(CustomButton)`
  width: 100%;
  margin-bottom: 1rem;
`;

export const ToLoginLink = styled(Link)`
  font-size: 0.9rem;
`;

export const SubmitMessage = styled.p``;

export const PolicyMessage = styled.p`
  margin: 0.5rem;
`;

export const PolicyLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
