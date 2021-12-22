import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CSRFToken from '../../Components/csrftoken';
import * as S from './SignUp.elements';
import { Redirect } from 'react-router';

const SignUp = ({ currUser }) => {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdConfirm, setConfirm] = useState('');
  const [submit, setSubmit] = useState(false);
  const [sent, setSent] = useState(false);

  const [pwdMatch, setPwdMatch] = useState();

  const [usernameChecked, setUsernameCheck] = useState();
  const [nicknameChecked, setNicknameCheck] = useState();
  const [requestReview, setRequestReview] = useState(false);

  const onSignUpClick = () => {
    setSubmit(true);
    if (validateInput()) {
      axios({
        method: 'post',
        url: '/api/signup',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: username,
          nickname: nickname,
          email: email,
          password1: pwd,
          password2: pwdConfirm,
        },
      })
        .catch((error) => {
          if (error.response.status === 400) {
            error.response.data.password1
              ? setRequestReview(
                  '비밀번호가 보안에 취약합니다. 다른 비밀번호를 입력해주세요.',
                )
              : error.response.data.email
              ? setRequestReview(
                  '현재 해당 이메일로 가입된 사용자가 있습니다. 이메일 주소를 확인해주세요.',
                )
              : setRequestReview(
                  '회원가입 중 오류가 발생했습니다. 다시 한 번 시도해주세요.',
                );
          }
          setSubmit(false);
        })
        .then((response) => {
          if (response.status < 400) {
            setSent(true);
          }
        });
    } else {
      setSubmit(false);
    }
  };

  const validateInput = () => {
    if (username === '' || email === '' || pwd === '' || pwdConfirm === '') {
      setRequestReview('모든 영역은 필수 입력입니다.');
      return false;
    } else if (!usernameChecked || !nicknameChecked) {
      setRequestReview('아이디와 필명의 중복 확인이 필요합니다.');
      return false;
    } else if (!pwdMatch) {
      setRequestReview('비밀번호가 일치하지 않습니다.');
      return false;
    } else if (pwd.length < 8) {
      setRequestReview('비밀번호가 너무 짧습니다.');
      return false;
    } else if (pwd.match(/^\d+$/)) {
      setRequestReview('비밀번호가 숫자로만 이루어져 있습니다.');
      return false;
    }
    return true;
  };

  const checkDuplicate = (type, target, setFunc) => {
    if (target === '') setFunc(false);
    else {
      axios({
        method: 'post',
        url: `/api/${type}-check`,
        headers: {
          'Content-Type': 'application/json',
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
          if (error.response.status === 400) {
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

  useEffect(() => {
    if (pwdConfirm === '') setPwdMatch();
    else if (pwd === pwdConfirm) setPwdMatch(true);
    else setPwdMatch(false);
  }, [pwdConfirm]);

  return currUser ? (
    <Redirect to="/" />
  ) : sent ? (
    <>
      <S.AfterSent>
        <S.SentMessage>
          입력해주신 이메일로 인증 링크를 보내드렸습니다. 인증 후 로그인
          가능합니다.
        </S.SentMessage>
        <S.ToLoginLink to="/login">로그인 하기</S.ToLoginLink>
      </S.AfterSent>
    </>
  ) : (
    <>
      <S.SignUpSection>
        <S.SignUpForm>
          <CSRFToken />
          <S.SignUpLegend>회원가입</S.SignUpLegend>
          <S.SignUpFieldset>
            <S.InputContainer>
              <S.InputLabel htmlFor="username">
                아이디{' '}
                {usernameChecked === false ? (
                  <S.DuplicateMessage>
                    해당 아이디는 사용할 수 없습니다.
                  </S.DuplicateMessage>
                ) : (
                  ''
                )}
              </S.InputLabel>
              <S.InputWrapper>
                <S.SignUpInput
                  type="text"
                  name="username"
                  placeholder="공백없이 영문, 숫자 포함 4-30자"
                  duplicateChecked={usernameChecked}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameCheck();
                    setRequestReview('');
                  }}
                />
                {!usernameChecked ? (
                  <S.DuplicateCheckButton
                    onClick={() => {
                      checkDuplicate('username', username, setUsernameCheck);
                    }}
                  >
                    중복 확인
                  </S.DuplicateCheckButton>
                ) : (
                  <S.DuplicateConfirm>사용 가능합니다</S.DuplicateConfirm>
                )}
              </S.InputWrapper>
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="nickname">
                필명{' '}
                {nicknameChecked === false ? (
                  <S.DuplicateMessage>
                    해당 필명은 사용할 수 없습니다.
                  </S.DuplicateMessage>
                ) : (
                  ''
                )}
              </S.InputLabel>
              <S.InputWrapper>
                <S.SignUpInput
                  type="text"
                  name="nickname"
                  placeholder="글을 작성 시 표시되는 이름"
                  duplicateChecked={nicknameChecked}
                  onChange={(e) => {
                    setNickname(e.target.value);
                    setNicknameCheck();
                    setRequestReview('');
                  }}
                />
                {!nicknameChecked ? (
                  <S.DuplicateCheckButton
                    onClick={() => {
                      checkDuplicate('nickname', nickname, setNicknameCheck);
                    }}
                  >
                    중복 확인
                  </S.DuplicateCheckButton>
                ) : (
                  <S.DuplicateConfirm>사용 가능합니다</S.DuplicateConfirm>
                )}
              </S.InputWrapper>
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="username">이메일</S.InputLabel>
              <S.SignUpInput
                type="email"
                name="email"
                placeholder="ex. example@iieum.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setRequestReview('');
                }}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="password">비밀번호</S.InputLabel>
              <S.SignUpInput
                type="password"
                name="password"
                placeholder="공백없이 영문, 숫자 포함 8-20자"
                duplicateChecked={pwdMatch}
                onChange={(e) => {
                  setPwd(e.target.value);
                  setRequestReview('');
                }}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="passwordConfirm">
                비밀번호 확인
                {pwdMatch === false ? (
                  <S.DuplicateMessage>
                    비밀번호가 일치하지 않습니다.
                  </S.DuplicateMessage>
                ) : (
                  ''
                )}
              </S.InputLabel>
              <S.SignUpInput
                type="password"
                name="passwordConfirm"
                placeholder="비밀번호 재확인"
                duplicateChecked={pwdMatch}
                onChange={(e) => {
                  setConfirm(e.target.value);
                  setRequestReview('');
                }}
              />
            </S.InputContainer>
          </S.SignUpFieldset>
          <S.SignUpBtnContainer>
            {requestReview ? (
              <>
                <S.DuplicateMessage>{requestReview}</S.DuplicateMessage>
                <br />
              </>
            ) : (
              ''
            )}
            {submit ? (
              <S.SubmitMessage>처리 중입니다...</S.SubmitMessage>
            ) : (
              <>
                <S.SignUpBtn onClick={() => onSignUpClick()}>
                  가입하기
                </S.SignUpBtn>
                <S.ToLoginLink to="/login">로그인하기</S.ToLoginLink>
              </>
            )}
          </S.SignUpBtnContainer>
        </S.SignUpForm>
      </S.SignUpSection>
    </>
  );
};

export default SignUp;
