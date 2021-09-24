import React from "react";

import {
  RegisterSection,
  RegisterForm,
  RegisterLegend,
  RegisterFieldset,
  NicknameContainer,
  NicknameLabel,
  NicknameInput,
  PasswordContainer,
  PasswordLabel,
  PasswordInput,
  RegisterBtnContainer,
  RegisterBtn,
  ToLoginLink,
} from "./SignUp.elements";

const SignUp = () => {
  return (
    <RegisterSection>
      <RegisterForm>
        <RegisterLegend>회원가입</RegisterLegend>
        <RegisterFieldset>
          <NicknameContainer>
            <NicknameLabel>닉네임</NicknameLabel>
            <NicknameInput placeholder="공백없이 영문, 숫자 포함 6-12자" />
          </NicknameContainer>
          <PasswordContainer>
            <PasswordLabel>비밀번호</PasswordLabel>
            <PasswordInput placeholder="공백없이 영문, 숫자 포함 6-20자" />
          </PasswordContainer>
          <PasswordContainer>
            <PasswordLabel>비밀번호 확인</PasswordLabel>
            <PasswordInput placeholder="비밀번호 재확인" />
          </PasswordContainer>
        </RegisterFieldset>
        <RegisterBtnContainer>
          <RegisterBtn>가입하기</RegisterBtn>
          <ToLoginLink>로그인하기</ToLoginLink>
        </RegisterBtnContainer>
      </RegisterForm>
    </RegisterSection>
  );
};

export default SignUp;
