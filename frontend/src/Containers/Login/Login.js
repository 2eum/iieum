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
  LoginInput,
  LoginBtnContainer,
  LoginBtn,
  ToRegisterLink,
} from "./Login.elements";

const Login = ({ saveUserData, currUser }) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const usernameInputChange = (e) => {
    setUsername(e.target.value);
  };

  const pwdInputChange = (e) => {
    setPwd(e.target.value);
  };

  const validateInput = () => {
    return username !== "" && pwd !== "" ? true : false;
  };

  const onLoginClick = () => {
    if (validateInput()) {
      axios({
        method: "post",
        url: "/api/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: username,
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
          saveUserData(data.token, data.user.username, data.user.pk);
        });
    }
  };

  return currUser ? (
    <Redirect to="/" />
  ) : (
    <LoginSection>
      <LoginForm>
        <CSRFToken />
        <LoginLegend>이음에서 당신의 오늘을 기록하세요</LoginLegend>
        <LoginFieldset>
          <InputContainer>
            <LoginInput
              type="text"
              name="username"
              placeholder="닉네임"
              onChange={(e) => {
                usernameInputChange(e);
              }}
            />
          </InputContainer>
          <InputContainer>
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
          <ToRegisterLink to="/register">회원가입하기</ToRegisterLink>
        </LoginBtnContainer>
      </LoginForm>
    </LoginSection>
  );
};

export default Login;
