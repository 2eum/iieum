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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setConfirm] = useState("");

  const onRegisterClick = () => {
    if (validateInput()) {
      axios({
        method: "post",
        url: "/api/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: username,
          email: email,
          password1: pwd,
          password2: pwdConfirm,
        },
      })
        .then((response) => {
          if (response.status > 400) {
            setPlaceholder("Something went wrong!");
          }
          return response.data;
        })
        .then((data) => {
          saveUserData(data.Token, data.User, data.Id);
        });
    }
  };

  const validateInput = () => {
    return username !== "" && email !== "" && pwd !== "" && pwdConfirm !== ""
      ? true
      : false;
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
            <InputLabel htmlFor="username">아이디</InputLabel>
            <RegisterInput
              type="text"
              name="username"
              placeholder="공백없이 영문, 숫자 포함 6-12자"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="username">이메일</InputLabel>
            <RegisterInput
              type="email"
              name="email"
              placeholder="ex. test@iieum.com"
              onChange={(e) => {
                setEmail(e.target.value);
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
                setPwd(e.target.value);
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
                setConfirm(e.target.value);
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
