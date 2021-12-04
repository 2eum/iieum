import axios from "axios";
import React, { useState } from "react";
import CSRFToken from "../../Components/csrftoken";
import { Redirect } from "react-router";
import * as g from "../../globalStyles";

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
  ErrorMessage,
} from "./Login.elements";
import { InputLabel } from "../SignUp/SignUp.elements";

const Login = ({ saveUserData, currUser, setNickname }) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
          setErrorMsg("");
          saveUserData(
            response.data.token,
            response.data.user.username,
            response.data.user.pk
          );
          return response.data.token;
        })
        .catch((error) => {
          if (error.response) {
            if (
              error.response.data["non_field_errors"][0] ===
              "Unable to log in with provided credentials."
            )
              setErrorMsg("아이디 혹은 비밀번호가 바르지 않습니다.");
            else if (
              error.response.data["non_field_errors"][0] ===
              "E-mail is not verified."
            )
              setErrorMsg("이메일 인증 후 로그인 해주세요.");
            else {
              setErrorMsg("로그인에 실패했습니다. 다시 시도해주세요");
            }
          }
        });
    } else {
      setErrorMsg("아이디와 비밀번호를 입력해주세요");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onLoginClick();
    }
  };

  return currUser ? (
    <Redirect to="/" />
  ) : (
    <g.Background>
      <LoginSection>
        <LoginForm>
          <CSRFToken />
          <LoginLegend>로그인</LoginLegend>
          <LoginFieldset>
            <InputContainer>
              <LoginInput
                type="text"
                name="username"
                placeholder="아이디"
                onChange={(e) => {
                  usernameInputChange(e);
                }}
                onKeyPress={handleKeyPress}
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
                onKeyPress={handleKeyPress}
              />
            </InputContainer>
          </LoginFieldset>
          <LoginBtnContainer>
            {errorMsg !== "" ? <ErrorMessage>{errorMsg}</ErrorMessage> : ""}
            <LoginBtn onClick={() => onLoginClick()}>로그인</LoginBtn>
            <ToRegisterLink to="/register">회원가입하기</ToRegisterLink>
          </LoginBtnContainer>
        </LoginForm>
      </LoginSection>
    </g.Background>
  );
};

export default Login;
