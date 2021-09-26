import axios from "axios";
import React, { useState } from "react";
import CSRFToken from "../../Components/csrftoken";
import { Redirect } from "react-router";

import {
  LoginSection,
  LoginForm,
  LoginLegend,
  LoginFieldset,
  InputContainer,
  InputLabel,
  LoginInput,
  LoginBtnContainer,
  LoginBtn,
  ToLoginLink,
} from "./Login.elements";

const Login = ({ token, saveUserData, currUser }) => {
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");

  const nicknameInputChange = (e) => {
    setNickname(e.target.value);
  };

  const pwdInputChange = (e) => {
    setPwd(e.target.value);
  };

  const validateInput = () => {
    return nickname !== "" && pwd !== "" ? true : false;
  };

  const onLoginClick = () => {
    if (validateInput()) {
      axios({
        method: "post",
        url: "/api/login/",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
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
    <LoginSection>
      <LoginForm>
        <CSRFToken />
        <LoginLegend>로그인</LoginLegend>
        <LoginFieldset>
          <InputContainer>
            <InputLabel htmlFor="nickname">닉네임</InputLabel>
            <LoginInput
              type="text"
              name="nickname"
              placeholder="닉네임"
              onChange={(e) => {
                nicknameInputChange(e);
              }}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">비밀번호</InputLabel>
            <LoginInput
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={(e) => {
                pwdInputChange(e);
              }}
            />
          </InputContainer>
        </LoginFieldset>
        <LoginBtnContainer>
          <LoginBtn onClick={() => onLoginClick()}>로그인</LoginBtn>
          <ToLoginLink to="/signup">회원가입하기</ToLoginLink>
        </LoginBtnContainer>
      </LoginForm>
    </LoginSection>
  );
};

export default Login;
