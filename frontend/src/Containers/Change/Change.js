import axios from "axios";
import React, { useState } from "react";
import { Background } from "../../styles/globalStyles";
import * as S from "./Change.elements";

const Change = ({ token, username, currUser, saveUserData }) => {
  const [isValidated, setValidated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordCheckInput, setPasswordCheckInput] = useState("");
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordErrorMsg, setPasswordError] = useState("");

  const [nicknameInput, setNicknameInput] = useState("");
  const [nicknameCheck, setNicknameCheck] = useState(null);
  const [nicknameErrorMsg, setNicknameError] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const [nicknameChanged, setNicknameChanged] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleValidation = () => {
    axios({
      method: "post",
      url: "/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: username,
        password: passwordInput,
      },
    })
      .then(() => setValidated(true))
      .then(() => setPasswordInput(""))
      .catch((error) => {
        if (error.response) {
          setErrorMsg("비밀번호가 일치하지 않습니다.");
        }
      });
  };

  const checkDuplicate = (type, target, setFunc) => {
    if (target === "") setFunc(false);
    else {
      axios({
        method: "post",
        url: `/api/${type}-check`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: `${target}`,
          nickname: `${target}`,
        },
      })
        .catch((error) => {
          if (error.response.status === 409) {
            setFunc(false);
            return error.response;
          }
        })
        .then((response) => {
          if (response.status < 400) {
            setFunc(true);
          }
        });
    }
  };

  const handleNicknameChange = () => {
    if (nicknameCheck) {
      axios({
        method: "patch",
        url: "/api/accounts/change-nickname",
        headers: {
          "Content-Type": "application/json",
          Authorization: `jwt ${token}`,
        },
        data: {
          new_nickname: nicknameInput,
        },
      })
        .then((response) => {
          saveUserData(token, response.data.username, response.data.id);
        })
        .then(() => {
          setNicknameChanged(true);
        });
    } else {
    }
  };

  const handlePasswordChange = () => {
    if (validatePassword()) {
      axios({
        method: "post",
        url: "/api/accounts/change-password",
        headers: {
          "Content-Type": "application/json",
          Authorization: `jwt ${token}`,
        },
        data: {
          new_password1: passwordInput,
          new_password2: passwordCheckInput,
        },
      })
        .then(() => {
          setPasswordChanged(true);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setPasswordValid(false);
            setPasswordError("비밀번호가 보안에 취약합니다.");
          }
        });
    } else {
      setPasswordValid(false);
    }
  };

  const validatePassword = () => {
    if (passwordInput !== passwordCheckInput) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return false;
    } else if (passwordInput.length < 8) {
      setPasswordError("비밀번호가 너무 짧습니다.");
      return false;
    } else if (passwordInput.match(/^\d+$/)) {
      setPasswordError("비밀번호가 숫자로만 이루어져 있습니다.");
      return false;
    }

    return true;
  };

  return (
    <Background>
      {!isValidated ? (
        <S.ValidateSection>
          <S.ValidateTitle>
            개인정보 변경을 위해 비밀번호를 다시 입력해주세요
          </S.ValidateTitle>
          <S.PasswordInput
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <S.ErrorMessage>{errorMsg}</S.ErrorMessage>
          <S.PasswordSubmit onClick={handleValidation}>확인</S.PasswordSubmit>
        </S.ValidateSection>
      ) : (
        <S.ChangeSection>
          <S.NicknameChangeContainer>
            {!nicknameChanged ? (
              <>
                <S.ContainerTitle>닉네임 변경</S.ContainerTitle>
                {nicknameCheck === false ? (
                  <S.ErrorMessage>
                    해당 닉네임은 사용할 수 없습니다
                  </S.ErrorMessage>
                ) : (
                  <S.ErrorMessage> </S.ErrorMessage>
                )}
                <S.NicknameInputWrapper>
                  <S.NewItemInput
                    type="text"
                    placeholder="닉네임"
                    onChange={(e) => {
                      setNicknameInput(e.target.value);
                      setNicknameCheck(null);
                    }}
                  />
                  {!nicknameCheck ? (
                    <S.NicknameDuplicateCheck
                      onClick={() => {
                        checkDuplicate(
                          "nickname",
                          nicknameInput,
                          setNicknameCheck
                        );
                      }}
                    >
                      중복확인
                    </S.NicknameDuplicateCheck>
                  ) : (
                    <S.NicknameConfirmed>사용 가능합니다</S.NicknameConfirmed>
                  )}
                </S.NicknameInputWrapper>

                <S.NewItemSubmit onClick={handleNicknameChange}>
                  변경하기
                </S.NewItemSubmit>
              </>
            ) : (
              <>
                <p>변경이 완료되었습니다</p>
                <S.HomeLink to="/">홈으로 돌아가기</S.HomeLink>
              </>
            )}
          </S.NicknameChangeContainer>
          <S.PasswordChangeContainer>
            {!passwordChanged ? (
              <>
                <S.ContainerTitle>비밀번호 변경</S.ContainerTitle>
                <S.PasswordInputWrapper>
                  <S.NewItemInput
                    type="password"
                    placeholder="비밀번호"
                    onChange={(e) => setPasswordInput(e.target.value)}
                  />
                  <S.NewItemInput
                    type="password"
                    placeholder="비밀번호 확인"
                    onChange={(e) => setPasswordCheckInput(e.target.value)}
                  />
                </S.PasswordInputWrapper>
                {passwordValid === false ? (
                  <S.ErrorMessage>{passwordErrorMsg}</S.ErrorMessage>
                ) : (
                  ""
                )}
                <S.NewItemSubmit onClick={handlePasswordChange}>
                  변경하기
                </S.NewItemSubmit>
              </>
            ) : (
              <>
                <p>변경이 완료되었습니다</p>
                <S.HomeLink to="/">홈으로 돌아가기</S.HomeLink>
              </>
            )}
          </S.PasswordChangeContainer>
        </S.ChangeSection>
      )}
    </Background>
  );
};

export default Change;
