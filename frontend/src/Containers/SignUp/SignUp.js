import axios from "axios";
import React, { useState } from "react";
import CSRFToken from "../../Components/csrftoken";
import { Redirect } from "react-router";

import {
  RegisterSection,
  RegisterForm,
  RegisterLegend,
  RegisterFieldset,
  InputContainer,
  InputLabel,
  RegisterInput,
  RegisterBtnContainer,
  RegisterBtn,
  ToLoginLink,
} from "./SignUp.elements";

const SignUp = ({ token, saveUserData, currUser }) => {
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setConfirm] = useState("");

  const nicknameInputChange = (e) => {
    setNickname(e.target.value);
  };

  const pwdInputChange = (e) => {
    setPwd(e.target.value);
  };

  const pwdConfirmInputChange = (e) => {
    setConfirm(e.target.value);
  };

  const validateInput = () => {
    return nickname !== "" && pwd !== "" && pwd === pwdConfirm ? true : false;
  };

  const onRegisterClick = () => {
    if (validateInput()) {
      axios({
        method: "post",
        url: "/api/signup/",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          nickname: nickname,
          password: pwd,
        },
      })
        .then((response) => {
          if (response.status > 400) {
            setPlaceholder("Something went wrong!");
          }
          return response.data;
        })
        .then((data) => {
          saveUserData(data.Token, data.User);
        });
    }
  };

  return currUser ? (
    <Redirect to="/" />
  ) : (
    <RegisterSection>
      <RegisterForm>
        <CSRFToken />
        <RegisterLegend>회원가입</RegisterLegend>
        <RegisterFieldset>
          <InputContainer>
            <InputLabel htmlFor="nickname">닉네임</InputLabel>
            <RegisterInput
              type="text"
              name="nickname"
              placeholder="공백없이 영문, 숫자 포함 6-12자"
              onChange={(e) => {
                nicknameInputChange(e);
              }}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">비밀번호</InputLabel>
            <RegisterInput
              type="password"
              name="password"
              placeholder="공백없이 영문, 숫자 포함 6-20자"
              onChange={(e) => {
                pwdInputChange(e);
              }}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="passwordConfirm">비밀번호 확인</InputLabel>
            <RegisterInput
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 재확인"
              onChange={(e) => {
                pwdConfirmInputChange(e);
              }}
            />
          </InputContainer>
        </RegisterFieldset>
        <RegisterBtnContainer>
          <RegisterBtn onClick={() => onRegisterClick()}>가입하기</RegisterBtn>
          <ToLoginLink to="/">로그인하기</ToLoginLink>
        </RegisterBtnContainer>
      </RegisterForm>
    </RegisterSection>
  );
};

export default SignUp;
